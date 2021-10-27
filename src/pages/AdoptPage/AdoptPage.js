import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './AdoptPage.scss'
// img src
import AdoptPage1 from './adoptpage-01-01_300x300.jpeg'
import AdoptPage2 from './adoptpage-01-02_300x300.jpeg'

function AdoptPage() {
  return (
    <>
      <Container>
        {/* header */}
        <Row>
          <div class="header-title">
            <p>
              貓咪認養資訊:<span class="title-text"> 小呆・小憨</span>
            </p>
          </div>
        </Row>
        {/* avatar */}
        <Row>
          <div class="rowAvatar">
            <div class="adoptPageAvatar ">
              <img src={AdoptPage1} alt="" />
            </div>
            <div class="small-avatar">
              <div class="sm-avatar">
                <img src={AdoptPage2} alt="" />
              </div>
              <div class="sm-avatar">
                <img src={AdoptPage2} alt="" />
              </div>
              <div class="sm-avatar">
                <img src={AdoptPage2} alt="" />
              </div>
            </div>
          </div>
        </Row>
        {/* Detail Box */}
        <Row>
          <div class="rowDetail">
            <div class="detail">
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>姓名</p>
                </li>
                <li class="detail-text">
                  <p>小呆・小憨</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>性別</p>
                </li>
                <li class="detail-text">
                  <p>女孩</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>體型</p>
                </li>
                <li class="detail-text">
                  <p>中型</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>電話</p>
                </li>
                <li class="detail-text">
                  <p>0988123456</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>個性</p>
                </li>
                <li class="detail-text">
                  <p>活潑好動、愛撒嬌</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>分類</p>
                </li>
                <li class="detail-text">
                  <p>貓科</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>地區</p>
                </li>
                <li class="detail-text">
                  <p>台北</p>
                </li>
              </ul>
              <ul class="detail-ul">
                <li class="detail-icon">
                  <i class="fas fa-paw"></i>
                </li>
                <li class="detail-title">
                  <p>狀態</p>
                </li>
                <li class="detail-text">
                  <p>開放認養</p>
                </li>
              </ul>
            </div>
            <div class="detail-btn">
              <div class="button-G" type="submit">
                <div>
                  <button id="card-btn">
                    <span class="btn-mail">
                      <i class="far fa-envelope"></i>
                    </span>
                    了解更多
                  </button>
                </div>
              </div>
              <div class="buttonAdopt" type="submit">
                <div>
                  <button id="card-btn">
                    <span class="btn-heart">
                      <i class="fas fa-heart"></i>
                    </span>
                    我要認養
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* Comments */}
        <Row>
          <div class="rowComment">
            <div class="comm">
              <div class="com-header">
                <h6 class="com-header-title">留言板</h6>
              </div>
              <div class="comment">
                <div class="com-box">
                  <div class="com-avatar">
                    <span>
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <div class="com-user">
                    <div class="com-name">
                      <p>我是貓奴</p>
                    </div>
                    <div class="com-msn">
                      <h6>Hi,想和你約時間看小呆</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <div class="com-box">
                  <div class="com-avatar">
                    <span>
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <div class="com-user">
                    <div class="com-name">
                      <p>小呆僕人</p>
                    </div>
                    <div class="com-msn">
                      <h6>好呀，這週六可以嗎？</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <div class="com-box">
                  <div class="com-avatar">
                    <span>
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <div class="com-user">
                    <div class="com-name">
                      <p>我是貓奴</p>
                    </div>
                    <div class="com-msn">
                      <h6>okay</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="commBtn">
              <div class="comButton" type="submit">
                <div>
                  <button id="card-btn">我要回覆</button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default AdoptPage
