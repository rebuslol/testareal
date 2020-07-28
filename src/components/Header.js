import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../logo.png'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Mts from './Mts'
import Beeline from './Beeline'
import Megafone from './Megafone'
import Home from './Home';

const Header = () => {
    return (
      <>
      <Navbar collapseOnSelect  expand='md' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>
                <img
                 src={logo}
                  height='30'
                  width='30'
                  className='d-inline-block align-top' 
                  alt='logo'
                  /> Оплата мобильной связи
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
              <Nav.Link href='/' > Назад </Nav.Link>
                <Nav.Link href='/mts' > МТС </Nav.Link>
                <Nav.Link href='/beeline'> Билайн </Nav.Link>
                <Nav.Link href='/megafone'> Мегафон </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/mts' component={Mts} />
          <Route exact path='/beeline' component={Beeline} />
          <Route exact path='/megafone' component={Megafone} />
        </Switch>
      </Router>
      </>
    )
}

export default Header