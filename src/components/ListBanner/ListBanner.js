import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

//img src
import AdoptListBanner from './adoptlist-banner_300x300.jpg'

import './ListBanner.scss'
function ListBanner() {
  return (
    <>
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
      {/* RWD-BANNER */}
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
    </>
  )
}

export default ListBanner
