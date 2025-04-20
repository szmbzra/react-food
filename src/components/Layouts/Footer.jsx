import React,{useState,useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Links } from "react-router-dom";

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const ListenToScroll =() =>{
    let heightToHidden = 250;
    const windowScroll =  document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll >heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }
useEffect(() => {
  window.addEventListener("scroll", ListenToScroll);
  return () => {
    window.removeEventListener("scroll", ListenToScroll);
  };
})

  return (
 <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
              <h4>Location</h4>
              <p>Location</p>
              <p>5505 Waterford District</p>
              <p>Dr, Miami, FL 33126</p>
              <p>United States</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
            <h5> Working Hours</h5>
            <p>Mon-Fri: 9:00AM - 10:00PM</p>
            <p>Saturday: 10:00AM - 8:30PM</p>
            <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
            <h5>Order Now</h5>
            <p>Lorem, ipsum dolor.</p>
            <p><Link to="tel:9848879454" className="calling">999-888-777</Link></p>
            </div>
          </Col>

          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
            <h5>Follow Us</h5>
            <p>Lorem, ipsum dolor.</p>
            <p><Link to="tel:9848879454" className="calling">999-888-777</Link></p>
            <ul className="list-unstyled text-center mt-2 d-inline-flex gap-4">
              <li><Link to="/">
              <i className="bi bi-facebook"></i>
              </Link></li>
              <li><Link to="/">
              <i className="bi bi-twitter"></i>
              </Link></li>
              <li><Link to="/">
              <i className="bi bi-instagram"></i>
              </Link></li>
              <li><Link to="/">
              <i className="bi bi-youtube"></i>
              </Link></li>
            </ul>
            </div>
          </Col>
        </Row>
        <Row className="copy_right">
          <Col>
          <div>
            <ul className="list-unstyled text-center mb-0">
            <li><Link to="/">
            &copy; <span>Sam Bajracharya</span>. All Right Reserved
              </Link></li>
            <li><Link to="/">
            About Us
              </Link></li>
            <li><Link to="/">
            Terms Of Use
              </Link></li>
            <li><Link to="/">
           Privacy Policy
              </Link></li>
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
    {/* scroll top */}
    {isVisible && (
      <div className="scroll_top" onClick={scrollTop}>
        <i className="bi bi-arrow-up"></i>
      </div>
    )}
    </>
  );
};

export default Footer;
