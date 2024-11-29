import { Container, Dropdown, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const TVShows = () => {
  return (
    <Container className="my-4 mx-3">
      <Row className="align-items-center justify-content-between">
        <Col xs="auto" className="d-flex align-items-center">
          <h1 className="text-white me-3">TV Shows</h1>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-genres">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Comedy</Dropdown.Item>
              <Dropdown.Item>Drama</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xs="auto" className="d-flex align-items-center">
          <Button variant="outline-secondary" className="px-2 border-secondary mx-1 icon-custom">
            <i className="bi bi-text-left"></i>
          </Button>
          <Button variant="outline-secondary" className="px-2 border-secondary mx-1 icon-custom">
            <i className="bi bi-grid-fill"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TVShows;
