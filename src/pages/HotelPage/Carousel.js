import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

class Carousel1 extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="./adoptlist-01_300x300.jpg" alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./adoptlist-01_300x300.jpg" alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./adoptlist-01_300x300.jpg" alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

export default Carousel1
