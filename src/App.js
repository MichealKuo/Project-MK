import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import AdoptList from './pages/AdoptList/AdoptList'
import AdoptPage from './pages/AdoptPage/AdoptPage'
import HotelList from './pages/HotelList/HotelList'
import HotelPage from './pages/HotelPage/HotelPage'
import ProductCat from './pages/ProductCat'
import AuthHeader from './components/AuthHeader'
import SignUp from './pages/sign-up/SignUp'
import Login from './pages/login/Login'
import Member from './pages/member/Member'
// 組件
import ScrollToTop from 'react-router-scroll-top'
import MyNavbar from './components/MyNavbar'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
function App() {
  const [auth, setAuth] = useState(false)

  //Sharon註冊功能--------------------------------------
  const [fields, setFields] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '', // 有可能只是在瀏覽器檢查用而已
    birthday: '',
    mobile: '',
    address: '',
  })
  // 2.存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '', // 有可能只是在瀏覽器檢查用而已
    birthday: '',
    mobile: '',
    address: '',
  })
  //上相片呈現資料資料----------
  const [imgSrc, setImgSrc] = useState('')

  //Sharon--------------------------------------------
  return (
    <Router>
      <>
        <MyNavbar />
        <MultiLevelBreadCrumb />
        <ScrollToTop>
          {/* <AuthHeader setAuth={setAuth} /> */}

          <Switch>
            <Route path="/adoptlist/adoptpage/:id?">
              <AdoptPage />
            </Route>
            c
            <Route path="/adoptlist/">
              <AdoptList />
            </Route>
            <Route path="/hotellist">
              <HotelList />
            </Route>
            {/* AG */}
            <Route path="/productlist/cat">
              <ProductCat />
            </Route>
            {/* sharon */}
            <Route path="/admin/user/:task?">
              <Member
                auth={auth}
                setAuth={setAuth}
                fields={fields}
                setFields={setFields}
                fieldErrors={fieldErrors}
                setFieldErrors={setFieldErrors}
                imgSrc={imgSrc}
                setImgSrc={setImgSrc}
              />
            </Route>
            <Route path="/login">
              {/* 利用props傳入頁面元件狀態 */}
              <Login auth={auth} setAuth={setAuth} />
            </Route>
            <Route path="/signup">
              {/* 利用props傳入頁面元件狀態 */}
              <SignUp
                fields={fields}
                setFields={setFields}
                fieldErrors={fieldErrors}
                setFieldErrors={setFieldErrors}
                imgSrc={imgSrc}
                setImgSrc={setImgSrc}
              />
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
