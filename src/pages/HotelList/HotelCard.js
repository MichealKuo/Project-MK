import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import Dash from 'lodash'
import './MKButtons.scss'

const pageSize = 3

function HotelCard() {
  const [hotelList, setHotelList] = useState([])
  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    Axios.get('http://localhost:3002/api/gethotellist').then((response) => {
      setHotelList(response.data)
      setPaginatedPosts(Dash(response.data).slice(0).take(pageSize).value())
    })
  }, [])
  console.log(paginatedPosts)

  const pageCount = hotelList ? Math.ceil(hotelList.length / pageSize) : 0
  // if ([pageCount === 1]) return null
  const pages = Dash.range(1, pageCount + 1)
  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * pageSize
    const paginatedPost = Dash(hotelList)
      .slice(startIndex)
      .take(pageSize)
      .value()
    setPaginatedPosts(paginatedPost)
  }
  return (
    <>
      <div className="MKrow-list">
        {paginatedPosts.map((v, i) => {
          return (
            <li key={i} className="MKDisplayLi col-10 col-md-4">
              <div className="MKcard">
                <div className="MKcard-context">
                  <div className="MKavatar">
                    <img src={v.avatar} alt="" />
                  </div>
                  <div className="">
                    <p id="MKcard-title">{v.name}</p>
                    <p id="MKcard-text">
                      電話：{v.cell}
                      <br />
                      地址：{v.address}
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-5" type="submit">
                  <div>
                    <Link to={'/hotellist/hotelpage/' + v.sid}>
                      <button className="MKYellowOutlineBtn">了解更多</button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </div>
      <div>
        <ul className="pagination d-flex justify-content-center ">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? ' page-item active ' : 'page-item'
              }
            >
              <p
                className="page-link MKpage-link"
                onClick={() => pagination(page)}
              >
                {page}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default withRouter(HotelCard)
