import React from "react";
import {Navbar, Nav, FormControl, Form, Button, Container} from "react-bootstrap";

function Navigation() {
    return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/movies">Movies</Nav.Link>
                    <Nav.Link href="/tv">Tv</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
    )

}
export default Navigation;