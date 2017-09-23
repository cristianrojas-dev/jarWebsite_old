// Dependencies
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

// Components
import App from './components/App'
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import Careers from './pages/Careers'
import History from './pages/History'
import MissionVision from './pages/MissionVision'
import News from './pages/News'
import NewsAdd from './pages/NewsAdd'
import HomeCms from './pages/HomeCms'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/missionVision" component={MissionVision} />
      <Route path="/careers" component={Careers} />
      <Route path="/news" component={News} />
      <Route path="/newsadd" component={NewsAdd} />
      <Route path="/homecms" component={HomeCms} />
    </Switch>
  </App>

export default AppRoutes
