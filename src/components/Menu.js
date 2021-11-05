import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import '../Styles/menu.scss'
export default function menu() {
  return (
    <>
      <Container>
        <Row>
          <ul className="menu">
            <li>
              <Link to="/adoptlist/">AdoptList</Link>
            </li>
            <li>
              <Link to="/adoptlist/adoptpage">AdoptPage</Link>
            </li>
            <li>
              <Link to="/hotellist">HotelList</Link>
            </li>
            <li>
              <Link to="/hotellist/hotelpage">HotelPage</Link>
            </li>
            <li>
              <Link to="/upload">upload</Link>
            </li>
          </ul>
        </Row>
      </Container>
    </>
  )
}
