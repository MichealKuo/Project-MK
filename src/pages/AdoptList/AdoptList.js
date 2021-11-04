import React, { useState, useEffect } from 'react'
import { Container, Row, Pagination } from 'react-bootstrap'
import './AdoptList.scss'
import AdoptListBanner from './adoptlist-banner_300x300.jpg'
import { withRouter } from 'react-router-dom'

//data axios
import Axios from 'axios'
function AdoptList() {
  // data axios
  const [petList, setPetList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getpetlist').then((response) => {
      setPetList(response.data)
    })
  }, [])

  return (
    <>
      <Container fluid>
        {/* banner */}
        <Row>
          <div className="MKbanner">
            <div className="MKbanner-left">
              <img src={AdoptListBanner} alt="" />
            </div>
            <div className="MKbanner-right">
              <div className="MKbanner-text">
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
          <div className="MKRWD-banner">
            <div className="MKrwd-banner-text">
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
          <div className="MKrowFilter">
            <div className="MKadopt-filter">
              <div className="MKfilter">
                <div className="MKselector">
                  <p>種類</p>
                  <select name="" id="MKad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">貓貓</option>
                    <option value="">狗狗</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <p>地區</p>
                  <select name="" id="MKad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">台北市</option>
                    <option value="">新北市</option>
                    <option value="">台中市</option>
                  </select>
                </div>
                <div className="MKselector">
                  <p>性別</p>
                  <select name="" id="MKad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">男孩</option>
                    <option value="">女孩</option>
                  </select>
                </div>
                <div className="MKselector " id="MKad-filter">
                  <button id="MKsearch-btn" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* cards */}
        <Row>
          <div className="MKALrow-list">
            <div className="MKALlist">
              {petList.map((v, i) => {
                return (
                  <p key={i} className="MKDisplayLi col-12 col-lg-4">
                    <div className=" MKALcard ">
                      <div className="MKALcard-context">
                        <div className="MKALavatar">
                          <img src={v.avatar} alt="" />
                        </div>
                        <div className="">
                          <p id="MKALcard-title">{v.name}</p>
                          <p id="MKALcard-text"> {v.info}</p>
                        </div>
                      </div>
                      <div className="MKALbutton" type="submit">
                        <div>
                          <button id="MKALcard-btn">了解更多</button>
                        </div>
                      </div>
                    </div>
                  </p>
                )
              })}
            </div>
          </div>
        </Row>
        {/* pagination */}
        <Row>
          <div className="MKrow-pagination">
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

export default withRouter(AdoptList)
