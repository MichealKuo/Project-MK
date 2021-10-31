import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AdoptList from './pages/AdoptList/AdoptList'
import AdoptPage from './pages/AdoptPage/AdoptPage'
import HotelList from './pages/HotelList/HotelList'
import HotelPage from './pages/HotelPage/HotelPage'
import Menu from './components/Menu'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <Menu />
        <Switch>
          <Route path="/adoptlist">
            <AdoptList />
          </Route>
          <Route path="/adoptsage">
            <AdoptPage />
          </Route>
          <Route path="/hotellist">
            <HotelList />
          </Route>
          <Route path="/hotelpage">
            <HotelPage />
          </Route>
        </Switch>
        {/* end 匹配路由表 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
