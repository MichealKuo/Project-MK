import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import AdoptList from './pages/AdoptList/AdoptList'
import AdoptPage from './pages/AdoptPage/AdoptPage'
import HotelList from './pages/HotelList/HotelList'
import HotelPage from './pages/HotelPage/HotelPage'

// 組件
import ScrollToTop from 'react-router-scroll-top'
import MyNavbar from './components/MyNavbar'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
function App() {
  return (
    <Router>
      <>
        <MyNavbar />
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
            {/* <Route path="/upload">
            <DataThings />
          </Route> */}
          </Switch>
        </ScrollToTop>

        {/* end 匹配路由表 */}
      </>
    </Router>
  )
}

export default App
