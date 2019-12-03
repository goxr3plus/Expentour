import React from 'react'
import { Button, Form, Navbar } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'
import ExpenseListFilters from './ExpenseListFilters'

const Header = props => (
  <div>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/" className="header__title">
        Expentour
      </Navbar.Brand>
      <Form inline className="pull-right">
        <ExpenseListFilters></ExpenseListFilters>
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <IndexLinkContainer to="/" activeClassName="is-active" className="header__link">
          <Button>Home</Button>
        </IndexLinkContainer>
        <IndexLinkContainer to="/create" activeClassName="is-active" className="header__link">
          <Button>Create</Button>
        </IndexLinkContainer>
        <IndexLinkContainer to="/help" activeClassName="is-active" className="header__link">
          <Button>Help</Button>
        </IndexLinkContainer>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
