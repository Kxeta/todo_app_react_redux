import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'
import '../templates/custom.css'

import React from 'react'
import Menu from '../templates/menu'
import Routes from './routes'

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
)
