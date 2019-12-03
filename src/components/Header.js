import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import ExpenseListFilters from './ExpenseListFilters'

const Header = props => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="header__title">
        Expensify
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">
          <NavLink to="/" activeClassName="is-active" className="header__link" exact>
            Home
          </NavLink>
        </Nav.Link>
        <Nav.Link href="#">
          <NavLink to="/create" activeClassName="is-active" className="header__link">
            Create
          </NavLink>
        </Nav.Link>
        <Nav.Link href="#">
          <NavLink to="/help" activeClassName="is-active" className="header__link">
            Help
          </NavLink>
        </Nav.Link>
      </Nav>
      <Form inline>
        <ExpenseListFilters></ExpenseListFilters>
      </Form>
    </Navbar>
  </div>
)

export default Header
