import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';

export function NavbarStandard() {
    return (
        <>
            <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
                <Container fluid>
                    {/* Brand and Toggle */}
                    <div className="d-flex align-items-center">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Brand className="ms-2" href="#">
                            NotreCourse
                        </Navbar.Brand>
                    </div>

                    <div className="d-flex align-items-center ms-auto d-lg-none">
                        <Button variant="outline-primary">Login</Button>
                    </div>

                    {/* Collapsible Navigation */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="d-flex align-items-center ms-auto d-none d-lg-block">
                        <Button variant="outline-primary">Login</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}