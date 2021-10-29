import React from 'react'
import { Container, Row, Pagination } from 'react-bootstrap'
import './AdoptList.scss'
import AdoptListBanner from './adoptlist-banner_300x300.jpg'
function AdoptList() {
  return (
    <>
      <Container fluid>
        {/* banner */}
        <Row>
          <div className="banner">
            <div className="banner-left">
              <img src={AdoptListBanner} alt="" />
            </div>
            <div className="banner-right">
              <div className="banner-text">
                <p>毛孩找家</p>
                <h5>
                  你的一眼瞬間
                  <br />
                  就讓我有了被愛的機會
                </h5>
              </div>
            </div>
          </div>
        </Row>
        {/* RWD-Banner */}
        <Row>
          <div className="RWD-banner">
            <div className="rwd-banner-text">
              <p>毛孩找家</p>
              <br />
              <h5>
                你的一眼瞬間
                <br />
                <br />
                就讓我有了被愛的機會
              </h5>
            </div>
          </div>
        </Row>
        {/* filter */}
        <Row>
          <div class="rowFilter">
            <div class="adopt-filter">
              <div class="filter">
                <div class="selector">
                  <p>品種</p>
                  <select name="" id="ad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">貓貓</option>
                    <option value="">狗狗</option>
                  </select>
                </div>
                <div class="selector ">
                  <p>地區</p>
                  <select name="" id="ad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">北部</option>
                    <option value="">中部</option>
                    <option value="">南部</option>
                  </select>
                </div>
                <div class="selector">
                  <p>性別</p>
                  <select name="" id="ad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">男孩</option>
                    <option value="">女孩</option>
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
        {/* cards */}
        <Row>
          <div class="row-list">
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-01_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-02_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-03_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-01_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-02_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-03_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-01_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-02_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
            <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card ">
                <div class="card-context">
                  <div class="avatar">
                    <img
                      src="../images/adoptlist/adoptlist-03_300x300.jpg"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p id="card-title">小呆</p>
                    <p id="card-text">
                      {' '}
                      小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
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
      </Container>
      <Row>
        <div className="row-pagination">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </Row>
    </>
  )
}

export default AdoptList
