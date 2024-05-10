import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Information</h2>
                  <ul>
                    <li><strong>Email:</strong> ilyas.brahim19@gmail.com</li>
                    <li><strong>Phone:</strong> +46735819586</li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ilyas-brahim-00b56a1b4/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/ilyasbrahim" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
                    {}
                  </ul>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
