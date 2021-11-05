// import React from 'react'
// import './AdoptList.scss'
// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = []
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i)
//   }
//   return (
//     <>
//       <div>
//         <ul className="pagination MKpagination">
//           {pageNumbers.map((number) => (
//             <li key={number} className="page-item MKpage-item">
//               <a
//                 onClick={() => paginate(number)}
//                 href="!#"
//                 className="page-link MKpage-link"
//               >
//                 {number}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default Pagination
import axios from 'axios'
import React, { Component, Pagination } from 'react'
import { withRouter, Link } from 'react-router-dom'
export class PaginationC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 9,
      currentPage: 0,
    }
    // this.handelPageClick = this.handelPageClick.bind(this)
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    axios.get(`http://localhost:3002/api/getpetlist`).then((res) => {
      const data = res.data
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      )
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: res.data,
        tableData: slice,
      })
    })
  }
  render() {
    return (
      <div>
        <div className="MKALrow-list">
          <div className="MKALlist">
            {this.state.tableData.map((v, i) => {
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
                        <Link to={'/adoptlist/adoptpage/' + v.sid}>
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
        {/* <Pagination
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={() => this.handelPageClick.bind(this)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        /> */}
      </div>
    )
  }
}

export default PaginationC
