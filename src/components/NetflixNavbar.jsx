import { Navbar, Nav, NavDropdown, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/media/netflix_logo.png";
import kids from "../assets/media/kids_icon.png";
import avatar from "../assets/media/avatar.png";
const NetflixNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="py-3 w-100">
      <Container className="mx-2 w-100">
        <Navbar.Brand href="#">
          <img src={logo} alt="Netflix Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse className="justify-content-between" id="navbarNav">
          <Nav className="subTitles ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className=" d-flex align-items-center">
            <Nav.Link style={{ color: "#b3b3b3" }}>
              <i className="bi bi-search"></i>
            </Nav.Link>

            <Form className="d-none me-3" id="search-input">
              <InputGroup>
                <FormControl type="text" className="bg-dark text-white" placeholder="Search..." />
              </InputGroup>
            </Form>

            <Nav.Link>
              <img src={kids} alt="Kids Icon" height="40" />
            </Nav.Link>

            <Nav.Link>
              <i className="bi bi-bell-fill" style={{ fontSize: "20px" }}></i>
            </Nav.Link>

            <NavDropdown title={<img src={avatar} alt="Account Icon" height="30" className="rounded-circle" />} id="accountDropdown" align="end">
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="./index2.html">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
