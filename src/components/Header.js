import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

const Header = props => (
  <div>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <IndexLinkContainer to="/">
        <Navbar.Brand href="#" className="header__title">
          Expentour
        </Navbar.Brand>
      </IndexLinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <IndexLinkContainer to="/" activeClassName="is-active" className="header__link">
          <Button>Home</Button>
        </IndexLinkContainer>
        <IndexLinkContainer to="/create" activeClassName="is-active" className="header__link">
          <Button>Create</Button>
        </IndexLinkContainer>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
