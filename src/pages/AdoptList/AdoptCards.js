import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const AdoptCards = ({ petList, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>
  }
  return (
    <>
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
                      <Link to={'/adoptlist/adoptpage/' + v.id}>
                        <button id="MKALcard-btn">了解更多</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </p>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default withRouter(AdoptCards)
