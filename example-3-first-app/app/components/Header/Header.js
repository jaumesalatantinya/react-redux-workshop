import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends React.Component {
    render () {
        return (
            <div className="container">
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Redux Workshop</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">About us</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
