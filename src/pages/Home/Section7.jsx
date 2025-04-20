import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Section7() {
  return (
   <section className="contact_section">
    <Container>
        <Row className="align-items-center justify-content-center text-center">
            <Col sm={8} className='text-center'>
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem repudiandae reprehenderit placeat at. Nisi, eum, cumque error sit est sequi eligendi exercitationem sint, blanditiis porro rerum doloremque? Architecto sed vero quisquam optio excepturi, omnis mollitia qui enim possimus placeat molestiae!</p>
            <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
            Call: 123-456</Link>

            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Section7