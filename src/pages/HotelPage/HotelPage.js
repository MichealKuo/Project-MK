import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './HotelPage.scss'
import HotelPagePic from './hotelpage-01-01_300x300.jpeg'
import ComAvatar1 from './adoptlist-01_300x300.jpg'
import ComAvatar2 from './adoptlist-02_300x300.jpg'

function HotelPage() {
  // const coll = document.getElementsByClassName('collapsible')

  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener('click', function () {
  //     this.classList.toggle('active')
  //     var content = this.nextElementSibling
  //     if (content.style.maxHeight) {
  //       content.style.maxHeight = null
  //     } else {
  //       content.style.maxHeight = content.scrollHeight + 'px'
  //     }
  //   })
  // }
  return (
    <>
      <Container fluid>
        {/* title */}
        <Row>
          <div class="HotelHeaderTitle">
            <p>
              旅宿明細:<span class="title-text"> 喵星球</span>
            </p>
          </div>
        </Row>
        {/* avatar */}
        <Row>
          <div class="row HotelRowAvatar">
            <div class="HotelAvatar col-12 col-md-12">
              <div class="bigHotelAvatar">
                <img src={HotelPagePic} alt="" />
              </div>
              <div class="smallHotelAvatar">
                <div class="smallHotelAvatar">
                  <img src={HotelPagePic} alt="" />
                </div>
                <div class="smallHotelAvatar">
                  <img src={HotelPagePic} alt="" />
                </div>
                <div class="smallHotelAvatar">
                  <img src={HotelPagePic} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* booking form */}
        <Row>
          <div class="booking">
            {/* BANNER  */}
            <div class="bookBanner">
              <h2>訂房資訊</h2>
            </div>
            <div class="wrap">
              <form>
                <div class="bookFormGroup">
                  <label for="booking">入房時間</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="bookFormGroup">
                  <label for="checkout">退房日期</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="bookFormGroup">
                  <label for="count">人數</label>
                  <input
                    type="count"
                    class="form-control"
                    placeholder="房客人數"
                  />
                </div>
                <div class="price">
                  <div class="wrap">
                    <div class="datePrice">
                      <p class="perCost">$1200 x 2 晚</p>
                      <p class="perCost">$2400</p>
                    </div>
                  </div>
                  <div class="wrap">
                    <div class="datePrice">
                      <p>總價</p>
                      <p>$2400</p>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn login">
                  馬上預約
                </button>
              </form>
            </div>
          </div>
        </Row>
        {/* roomService */}
        <Row>
          <div class="row rowService">
            <div class="roomService col-12 col-sm-12 col-md-6 col-xl-6 ">
              <button type="button" class="collapsible ">
                設備＆服務
              </button>
              <div class="content">
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fas fa-user-nurse detailIcon"></i>
                    </li>
                    <li>
                      <p>疫苗注射</p>
                    </li>
                  </ul>
                </div>
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fas fa-coffee detailIcon"></i>
                    </li>
                    <li>
                      <p>下午茶餐點</p>
                    </li>
                  </ul>
                </div>
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fas fa-headphones detailIcon"></i>
                    </li>
                    <li>
                      <p>紓緩音療癒</p>
                    </li>
                  </ul>
                </div>
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fas fa-search detailIcon"></i>
                    </li>
                    <li>
                      <p>健檢</p>
                    </li>
                  </ul>
                </div>
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fas fa-ruler detailIcon"></i>
                    </li>
                    <li>
                      <p>毛髮修容</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="creditCard col-12 col-sm-12 col-md-6 col-xl-6 ">
              <button type="button" class="collapsible">
                付款方式
              </button>
              <div class="content">
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fab fa-cc-visa"></i>
                    </li>
                    <li>
                      <p>信用卡</p>
                    </li>
                  </ul>
                </div>
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fab fa-line"></i>
                    </li>
                    <li>
                      <p>LINE Pay</p>
                    </li>
                  </ul>
                </div>
                <div class="service">
                  <ul class="service">
                    <li>
                      <i class="fas fa-cash-register"></i>
                    </li>
                    <li>
                      <p>ATM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* hotel comments */}
        <Row>
          <div class="HotelRowComment">
            <div class="HotelComm">
              <div class="com-header">
                <h6 class="com-header-title">旅宿評價</h6>
              </div>
              <div class="comment">
                <div class="com-box">
                  <div class="com-avatar">
                    <img src={ComAvatar2} alt="" />
                  </div>
                  <div class="com-user">
                    <div class="comNameH">
                      <p>專業貓貓鏟屎官4我</p>
                    </div>
                    <div class="start">
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <div class="comMsn">
                      <h6>
                        成貓真的要結紮！發情期會叫到無法睡覺，結紮也讓貓貓身體不會有一些賀爾蒙相關的疾病
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="com-box">
                  <div class="com-avatar">
                    <img src={ComAvatar1} alt="" />
                  </div>
                  <div class="com-user">
                    <div class="comNameH">
                      <p>我是貓奴</p>
                    </div>
                    <div class="start">
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="">
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <div class="comMsn">
                      <h6>
                        我是新手貓奴，上禮拜剛領養了一隻三花貓，對於打疫苗還是一知半解，看到這篇文章超受用！
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="commBtnH">
                <div class="comButton" type="submit">
                  <div>
                    <button id="card-btn">我要評價</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default HotelPage
