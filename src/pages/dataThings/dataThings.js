import React from 'react'
import './dataThings.scss'
function dataThings() {
  return (
    <>
      <div className="FormUpload">
        <div className="upLoad ">
          <label>name</label>
          <input type="text" name="name" />
          <label>type</label>
          <input type="text" name="type" />
        </div>
        <button>submit</button>
      </div>
    </>
  )
}

export default dataThings
