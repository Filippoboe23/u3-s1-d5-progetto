import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const NetflixFooter = () => {
  return (
    <footer className="footer  py-4">
      <Container className="footer-container ">
        <div className="footer-icons d-flex justify-content-center  mb-3">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
          <i className="bi bi-twitter mx-2"></i>
          <i className="bi bi-youtube mx-2"></i>
        </div>

        <Row className="footer-links text-center  mb-3">
          {[
            "Audio and Subtitles",
            "Audio Description",
            "Help Center",
            "Gift Cards",
            "Media Center",
            "Investor Relations",
            "Jobs",
            "Terms of Use",
            "Privacy",
            "Legal Notes",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us"
          ].map((link, index) => (
            <Col xs={6} md={3} key={index} className="footer-links mb-2">
              <a href="#" className="text-secondary text-decoration-none">
                {link}
              </a>
            </Col>
          ))}
        </Row>

        <div className="footer-button  mb-3 ">
          <Button>Service Code</Button>
        </div>

        <div className="text-left footer-bottom">
          <span>&copy; 1997-2019 Netflix, Inc. {`{i-0d00fcda2fdf9c0de}`}</span>
        </div>
      </Container>
    </footer>
  );
};

export default NetflixFooter;
