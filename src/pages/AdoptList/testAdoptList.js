import React, { useState, useEffect } from 'react'
import './AdoptList.scss'
import AdoptListBanner from './adoptlist-banner_300x300.jpg'
import { withRouter, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
//Card
// import AdoptCards from './AdoptCards'
import Axios from 'axios'
import Dash from 'lodash'
const pageSize = 9

function AdoptList() {
  // filter
  const [selectType, setSelectType] = useState('')
  const [selectLocation, setSelectLocation] = useState('')
  const [selectGender, setSelectGender] = useState('')

  const handleLocation = (e) => {
    setSelectLocation(e.target.value)
  }
  const handleGender = (e) => {
    setSelectGender(e.target.value)
  }
  //adopt card
  const [petList, setPetList] = useState([])
  //paginatePart
  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getpetlist').then((response) => {
      setPetList(response.data)
      setPaginatedPosts(Dash(response.data).slice(0).take(pageSize).value())
    })
  }, [])
  //filter
  const handleType = (e) => {
    setSelectType(e.target.value)

    if (selectType !== '') {
      const filteredData = paginatedPosts.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(selectType.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(paginatedPosts)
    }
  }
  const filteredData = paginatedPosts.filter((item) => {
    return Object.values(item)
      .join('')
      .toLowerCase()
      .includes(selectType.toLowerCase())
  })
  console.log(selectType)
  console.log(filteredData)
  console.log(paginatedPosts)
  const [filteredResults, setFilteredResults] = useState([])
  // console.log(paginatedPosts)
  // console.log(petList)
  // console.log(paginatedPosts)

  const pageCount = petList ? Math.ceil(petList.length / pageSize) : 0
  const pages = Dash.range(1, pageCount + 1)
  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * pageSize
    const paginatedPost = Dash(petList).slice(startIndex).take(pageSize).value()
    setPaginatedPosts(paginatedPost)
  }

  return (
    <>
      <>
        {/* banner */}
        <>
          <div className="MKbanner">
            <div className="MKbanner-left">
              <img src={AdoptListBanner} alt="" />
            </div>
            <div className="MKbanner-right">
              <div className="MKbanner-text">
                <h2>????????????</h2>
                <p>
                  ??????????????????
                  <br />
                  ??????????????????????????????
                </p>
              </div>
            </div>
          </div>
        </>
        {/* RWD-Banner */}
        <>
          <div className="MKRWD-banner">
            <div className="MKrwd-banner-text">
              <h5>????????????</h5>
              <br />
              <p>
                ??????????????????
                <br />
                <br />
                ??????????????????????????????
              </p>
            </div>
          </div>
        </>
        {/* filter */}
        <>
          <div className="MKrowFilter">
            <div className="MKadopt-filter">
              <div className="MKfilter">
                <div className="MKselector">
                  <p>??????</p>
                  <select
                    value={selectType}
                    className="MKad-filter"
                    onChange={handleType}
                  >
                    <option value="">---?????????---</option>
                    <option value="??????">??????</option>
                    <option value="??????">??????</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <p>??????</p>
                  <select
                    value={selectLocation}
                    className="MKad-filter"
                    onChange={handleLocation}
                  >
                    <option value="">---?????????---</option>
                    <option value="?????????">?????????</option>
                    <option value="?????????">?????????</option>
                    <option value="?????????">?????????</option>
                  </select>
                </div>
                <div className="MKselector">
                  <p>??????</p>
                  <select
                    value={selectGender}
                    className="MKad-filter"
                    onChange={handleGender}
                  >
                    <option value="">---?????????---</option>
                    <option value="??????">??????</option>
                    <option value="??????">??????</option>
                  </select>
                </div>
                <div className=" ">
                  <button className="MKsearch-btn" type="submit">
                    <BsSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* cards */}
        <>
          {/* <AdoptCards petList={currentPosts} loading={loading} /> */}
          {/* <AdoptCards
            selectType={selectType}
            selectLocation={selectLocation}
            selectGender={selectGender}
            setSelectType={setSelectType}
            handleType={handleType}
          /> */}
          <div className="MKALrow-list">
            <div className="MKALlist">
              {selectType.length > 1
                ? filteredResults.map((v, i) => {
                    return (
                      <p key={i} className="MKDisplayLi col-12 col-md-4">
                        <div className=" MKALcard ">
                          <div className="MKALcard-context">
                            <div className="MKALavatar">
                              <img
                                className="MKALCardImg"
                                src={v.avatar}
                                alt=""
                              />
                            </div>
                            <div className="MKALcardContent">
                              <p className="MKALcard-title">{v.name}</p>
                              <p className="MKALcard-text"> {v.info}</p>
                            </div>
                          </div>
                          <div className="MKALbutton" type="submit">
                            <div>
                              {/* ?????????????????????id?????? */}
                              <Link to={'/adoptlist/adoptpage/' + v.sid}>
                                <button className="MKALcard-btn">
                                  ????????????
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </p>
                    )
                  })
                : paginatedPosts.map((v, i) => {
                    return (
                      <p key={i} className="MKDisplayLi col-12 col-md-4">
                        <div className=" MKALcard ">
                          <div className="MKALcard-context">
                            <div className="MKALavatar">
                              <img
                                className="MKALCardImg"
                                src={v.avatar}
                                alt=""
                              />
                            </div>
                            <div className="MKALcardContent">
                              <p className="MKALcard-title">{v.name}</p>
                              <p className="MKALcard-text"> {v.info}</p>
                            </div>
                          </div>
                          <div className="MKALbutton" type="submit">
                            <div>
                              {/* ?????????????????????id?????? */}
                              <Link to={'/adoptlist/adoptpage/' + v.sid}>
                                <button className="MKALcard-btn">
                                  ????????????
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </p>
                    )
                  })}
            </div>
          </div>
          <div className="MKpagination">
            {/* ???????????? */}
            <ul className="pagination">
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
      </>
    </>
  )
}

export default withRouter(AdoptList)
