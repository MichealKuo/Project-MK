// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import React, { useState } from 'react'
import './Styles/global.scss'

// 頁面用元件

import AdoptList from './pages/AdoptList/AdoptList'
import AdoptPage from './pages/AdoptPage/AdoptPage'
import HotelList from './pages/HotelList/HotelList'
import HotelPage from './pages/HotelPage/HotelPage'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <MultiLevelBreadCrumb />
          <ScrollToTop>
            <Switch>
              <Route path="/adoptlist/adoptpage/:id?">
                <AdoptPage />
              </Route>
              <Route path="/hotellist/hotelpage/:id?">
                <HotelPage />
              </Route>
              <Route path="/adoptlist/">
                <AdoptList />
              </Route>
              <Route path="/hotellist">
                <HotelList />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>
        <MyFooter />

        {/* end 匹配路由表 */}
      </>
    </Router>
  )
}

export default App
