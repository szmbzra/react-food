import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from  "../../assets/promotion/pro.png";
function Section4() {
  return (
<>
<section className="promotion_section">
  <Container>
    <Row className='align-item-center'>
      <Col lg={6} className='text-center mb-5 mb-lg-0'>
      <img src={PromotionImage} className="img-fluid" alt="promotion" />
      </Col>
      <Col lg={6} className='px-5'>
      <h2>Nothing brings people together like a good burger</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vero quam! Id quod ipsum sapiente?</p>
      <ul>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, quo?</p>
        </li>
        <li><p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p></li>
      </ul>
      </Col>
    </Row>
  </Container>
</section>
{/* parallax */}
<section className='bg_parallax_scroll'>
  
</section>
</>
  )
}

export default Section4
