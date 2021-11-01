import React, { useState, useEffect } from 'react'
import './dataThings.scss'
import Axios from 'axios'

function DataThings(props) {
  const { AdoptList, setAdoptList } = props
  // const [Name, setName] = useState('')
  // const [Type, setType] = useState('')
  const [petList, setPetList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3002/api/get').then((response) => {
      setPetList(response.data)
    })
  }, [])
  // const submitReview = () => {
  //   Axios.post('http://localhost:3002/api/insert', { Name, Type }).then(() => {
  //     alert('1234214')
  //   })
  // }

  return (
    <>
      <div className="FormUpload">
        {/* <div className="upLoad ">
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
        </div> */}
        <div>
          {petList.map((v, i) => {
            return (
              <h1>
                key={petList.id}
                name={petList.name}
                type={petList.type}
                avatar={petList.avatar}
                location={petList.location}
              </h1>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DataThings
