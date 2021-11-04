import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './AdoptPage.scss'
// img src
import { withRouter } from 'react-router-dom'

import AdoptPage1 from './adoptpage-01-01_300x300.jpeg'
import AdoptPage2 from './adoptpage-01-02_300x300.jpeg'
import ComAvatar2 from './adoptlist-02_300x300.jpg'

function AdoptPage() {
  return (
    <>
      <Container>
        {/* header */}
        <Row>
          <div className="MKheader-title">
            <p>
              貓咪認養資訊:<span className="MKtitle-text"> 小呆・小憨</span>
            </p>
          </div>
        </Row>
        {/* avatar */}
        <Row>
          <div className="MKrowAvatar">
            <div className="MKadoptPageAvatar ">
              <img src={AdoptPage1} alt="" />
            </div>
            <div className="MKsmall-avatar">
              <div className="MKsm-avatar">
                <img src={AdoptPage2} alt="" />
              </div>
              <div className="MKsm-avatar">
                <img src={AdoptPage2} alt="" />
              </div>
              <div className="MKsm-avatar">
                <img src={AdoptPage2} alt="" />
              </div>
            </div>
          </div>
        </Row>
        {/* Detail Box */}
        <Row>
          <div className="MKrowDetail">
            <div className="MKdetail">
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>姓名</p>
                </li>
                <li className="MKdetail-text">
                  <p>小呆・小憨</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>狀態</p>
                </li>
                <li className="MKdetail-text">
                  <p>開放認養</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>種類</p>
                </li>
                <li className="MKdetail-text">
                  <p>貓咪</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>體型</p>
                </li>
                <li className="MKdetail-text">
                  <p>中型</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>地區</p>
                </li>
                <li className="MKdetail-text">
                  <p>台北市</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>電話</p>
                </li>
                <li className="MKdetail-text">
                  <p>0988123456</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>性別</p>
                </li>
                <li className="MKdetail-text">
                  <p>女孩</p>
                </li>
              </ul>
              <ul className="MKdetail-ul">
                <li className="MKdetail-icon">
                  <i className="fas fa-paw"></i>
                </li>
                <li className="MKdetail-title">
                  <p>個性</p>
                </li>
                <li className="MKdetail-text">
                  <p>活潑好動、愛撒嬌</p>
                </li>
              </ul>
            </div>
            <div className="MKdetail-btn">
              <div className="MKbutton-G" type="submit">
                <div>
                  <button id="MKcard-btn">
                    <span className="MKbtn-mail">
                      <i className="far fa-envelope"></i>
                    </span>
                    私信飼主
                  </button>
                </div>
              </div>
              {/* <div className="MKbuttonAdopt" type="submit">
                <div>
                  <button id="MKcard-btn">
                    <span className="MKbtn-heart">
                      <i className="fas fa-heart"></i>
                    </span>
                    我要認養
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </Row>
        {/* Comments */}
        <Row>
          <div className="MKrowComment">
            <div className="MKcomm">
              <div className="MKcom-header">
                <h6 className="MKcom-header-title">留言板</h6>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <div className="MKcom-avatar">
                      <img src={ComAvatar2} alt="" />
                    </div>
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcom-name">
                      <p>我是貓奴</p>
                    </div>
                    <div className="MKcom-msn">
                      <h6>Hi,想和你約時間看小呆</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <div className="MKcom-avatar">
                      <img src={AdoptPage1} alt="" />
                    </div>
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcom-name">
                      <p>小呆僕人</p>
                    </div>
                    <div className="MKcom-msn">
                      <h6>好呀，這週六可以嗎？</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <div className="MKcom-avatar">
                      <img src={ComAvatar2} alt="" />
                    </div>
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcom-name">
                      <p>我是貓奴</p>
                    </div>
                    <div className="MKcom-msn">
                      <h6>okay</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MKcommBtn">
              <div className="MKcomButton" type="submit">
                <div>
                  <button id="MKcard-btn">我要回覆</button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(AdoptPage)
