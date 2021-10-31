import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './HotelList.scss'
import HotelListBanner from './hotellist-banner_300x300.jpg'
function HotelList() {
  return (
    <>
      <Container fluid>
        {/* Banner */}
        <Row>
          <div class="banner">
            <div class="banner-left">
              <img src={HotelListBanner} alt="" />
            </div>
            <div class="banner-right">
              <div class="banner-text">
<<<<<<< HEAD
                <h2>GO澡堂</h2>
                <p>
                  在這裏讓毛孩享受
                  <br />
                  專屬的度假天堂！
                </p>
=======
                <p>GO澡堂</p>
                <h5>
                  在這裏讓毛孩享受
                  <br />
                  專屬的度假天堂！
                </h5>
>>>>>>> 47f0ecb0bd08199bcfca8edb5f2320480ec69bbc
              </div>
            </div>
          </div>
        </Row>
        {/* RWD Banner */}
        <Row>
          <div class="RWD-banner">
            <div class="rwd-banner-text">
              <p>毛孩假期</p>
              <br />
              <h5>
                在這裏讓毛孩享受
                <br />
                <br />
                專屬的度假天堂！
              </h5>
            </div>
          </div>
        </Row>
        {/* filter */}
        <Row>
          <div class="rowFilter">
            <div class="adopt-filter">
              <div class="filter">
                <div class="selector ">
                  <p>地區</p>
                  <select name="" id="ad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">台北</option>
                    <option value="">新北</option>
                    <option value="">桃園</option>
                    <option value="">台南</option>
                    <option value="">台中</option>
                    <option value="">高雄</option>
                  </select>
                </div>
                <div class="selector ">
                  <p>價錢</p>
                  <select name="" id="ad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">500~1500</option>
                    <option value="">1500~2500</option>
                    <option value="">2500~5000~</option>
                  </select>
                </div>
                <div class="selector ">
                  <p>服務</p>
                  <select name="" id="ad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">修剪毛髮</option>
                    <option value="">美容清潔</option>
                    <option value="">疫苗注射</option>
                  </select>
                </div>
                <div class="selector " id="ad-filter">
                  <button id="search-btn" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* map */}
        <Row>
          <div class="row-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8517337052526!2d121.51392975777993!3d25.047523761341026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1634912525150!5m2!1szh-TW!2stw"
              loading="lazy"
            ></iframe>
          </div>
        </Row>
        {/* HotelCardList */}
        <Row>
          <div class="row-list">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/hotellist/hotellist-01_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">GO澡堂</p>
                    <p id="card-text">
                      電話：0911233123
                      <br />
                      地址：台北忠孝復興二段３號
                    </p>
                  </div>
                </div>
                <div class="button" type="submit">
                  <div>
                    <button id="card-btn">了解更多</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/hotellist/hotellist-02_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">毛兒．寵物美容</p>
                    <p id="card-text">
                      電話：0911233123
                      <br />
                      地址：台北忠孝復興二段３號
                    </p>
                  </div>
                </div>
                <div class="button" type="submit">
                  <div>
                    <button id="card-btn">了解更多</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/hotellist/hotellist-03_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">喵皇</p>
                    <p id="card-text">
                      電話：0911233123
                      <br />
                      地址：台北忠孝復興二段３號
                    </p>
                  </div>
                </div>
                <div class="button" type="submit">
                  <div>
                    <button id="card-btn">了解更多</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* pagination */}
        <Row>
          <div class="row-pagination">
            <div aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default HotelList
