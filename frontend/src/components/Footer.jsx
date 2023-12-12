import React from 'react'
import { Container ,Row ,Col} from 'react-bootstrap';

const Footer = () => {
     const curDate=new Date().getFullYear();
  return (
    <div>
      <Container>
        <Row>
            <Col className='text-center py-2'>
             <p>Shoe Lifestyle &copy; {curDate}</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
