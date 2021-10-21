import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AdoptList from './pages/AdoptList'
import { Container, Row } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <>
        <Container>
          <Row>
            <h1>home</h1>
            <Link to="/adopted">AdoptList</Link>
            <Switch>
              <Route exact path="/adopted">
                <AdoptList />
              </Route>
            </Switch>
          </Row>
        </Container>
      </>
    </Router>
  )
}

export default App
