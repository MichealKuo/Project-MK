import React, { useState, useEffect } from 'react'
import './dataThings.scss'
import Axios from 'axios'
function DataThings() {
  const [Name, setName] = useState('')
  const [Type, setType] = useState('')
  const [List, setList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3002/api/get').then((response) => {
      setList(response.data)
    })
  }, [])
  const submitReview = () => {
    Axios.post('http://localhost:3002/api/insert', { Name, Type }).then(() => {
      alert('1234214')
    })
  }

  return (
    <>
      <div className="FormUpload">
        <div className="upLoad ">
          <label>name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <label>type</label>
          <input
            type="text"
            name="type"
            onChange={(e) => {
              setType(e.target.value)
            }}
          />
        </div>
        <div>
          <button onClick={submitReview}>submit</button>
        </div>
        <div>
          {List.map((v, i) => {
            return (
              <h1>
                {v.name}||| {v.type}
              </h1>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DataThings
