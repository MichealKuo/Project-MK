import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AdoptList from './pages/AdoptList/AdoptList'
import AdoptPage from './pages/AdoptPage/AdoptPage'
import HotelList from './pages/HotelList/HotelList'
import HotelPage from './pages/HotelPage/HotelPage'
import DataThings from './pages/DataThings/DataThings'

import Menu from './components/Menu'

// 組件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MultiLevelBreadCrumb />
        <Menu />
        <Switch>
          <Route path="/adoptlist/adoptpage">
            <AdoptPage />
          </Route>
          <Route path="/hotellist/hotelpage">
            <HotelPage />
          </Route>
          <Route path="/adoptlist">
            <AdoptList />
          </Route>
          <Route path="/hotellist">
            <HotelList />
          </Route>
          {/* <Route path="/upload">
            <DataThings />
          </Route> */}
        </Switch>
        {/* end 匹配路由表 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
