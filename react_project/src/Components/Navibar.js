import React ,{Component} from "react";

import {Navbar, Nav, Button, Container, NavbarBrand} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
import Home from "../Pages/Home";
export default class NaviBar extends Component{
    render()
    {
        return (
            <>
            <Navbar collapseOnSelect expand='md' bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src='https://blogs.3ds.com/northamerica/wp-content/uploads/sites/4/2019/05/7-Reasons-to-Move-Your-PLM_Inline1.jpg'
                            height='55'
                            width='55'
                            className='d-inline-block align-top rounded-circle'
                            alt="Logo"

                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='/'> <b>Распределённое облако</b> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path = '/' component={Home}/>
                </Switch>
            </Router>
            </>

        );
    }

}