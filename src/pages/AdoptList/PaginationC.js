// import React from 'react'
// import './AdoptList.scss'
// import { withRouter, Link } from 'react-router-dom'

// const PaginationC = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = []
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i)
//     console.log(postsPerPage)
//     console.log(totalPosts)
//     console.log(pageNumbers)
//   }
//   return (
//     <>
//       <div>
//         <ul className="pagination MKpagination">
//           {pageNumbers.map((number) => (
//             <li key={number} className="page-item MKpage-item">
//               <Link
//                 to={'/adoptlist/page/' + number}
//                 onClick={() => paginate()}
//                 className="page-link MKpage-link"
//               >
//                 {number}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default PaginationC

// second one
import React from 'react'

function PaginationC() {
  return <div></div>
}

export default PaginationC
