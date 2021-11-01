import React, { useState, useEffect } from 'react'
import { Container, Row, Pagination } from 'react-bootstrap'
import './AdoptList.scss'
import AdoptListBanner from './adoptlist-banner_300x300.jpg'
//data axios
import Axios from 'axios'
function AdoptList() {
  // data axios
  const [petList, setPetList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/get').then((response) => {
      setPetList(response.data)
    })
  }, [])

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
                <h2>毛孩找家</h2>
                <p>
                  你的一眼瞬間
                  <br />
                  就讓我有了被愛的機會
                </p>
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
                  <p>種類</p>
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
                    <option value="">台北市</option>
                    <option value="">新北市</option>
                    <option value="">台中市</option>
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
            <div class="list">
              {petList.map((v, i) => {
                return (
                  <div class="card col-12 col-lg-4">
                    <div class="card-context">
                      <div class="avatar">
                        <img src={v.avatar} alt="" />
                      </div>
                      <div class="">
                        <p id="card-title">{v.name}</p>
                        <p id="card-text"> {v.info}</p>
                      </div>
                    </div>
                    <div class="button" type="submit">
                      <div>
                        <button id="card-btn">了解更多</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Row>
        {/* pagination */}
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
      </Container>
    </>
  )
}

export default AdoptList
