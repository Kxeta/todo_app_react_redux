import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../templates/grid'
import IconButton from '../templates/iconButton'
import { add, changeDescription, clear, search } from './todoActions'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.keyHandler   = this.keyHandler.bind(this)
  }

  componentWillMount(){
    this.props.search()
  }

  keyHandler(e){
    const { add, clear, search, description } = this.props
    if(e.key === 'Enter'){
      e.shiftKey ? search() : add(description)
    }
    if(e.key === 'Escape'){
      clear()
    }
  }

  render(){
    const { add, clear, search, description } = this.props
    return (
      <div className="row">
        <div role='form' className='todoForm'>
          <Grid cols='12 9 10'>
            <input type="text" className="form-control" id="description" 
            placeholder='Adicione uma Tarefa'
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}/>
          </Grid>
          <Grid cols='12 3 2 '>
            <IconButton style="primary" icon='plus' onClick={()=> add(description)}></IconButton>
            <IconButton style="info" icon='search' onClick={ search }></IconButton>
            <IconButton style="danger" icon='close' onClick={clear }></IconButton>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, clear, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)