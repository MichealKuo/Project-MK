import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

import '../styles/menu.scss'
export default function menu() {
  return (
    <>
      <Container>
        <Row>
          <ul className="menu">
            <li>
              <Link to="/adoptlist">AdoptList</Link>
            </li>
            <li>
              <Link to="/adoptsage">AdoptPage</Link>
            </li>
            <li>
              <Link to="/hotellist">HotelList</Link>
            </li>
            <li>
              <Link to="/hotelpage">HotelPage</Link>
            </li>
          </ul>
        </Row>
      </Container>
    </>
  )
}