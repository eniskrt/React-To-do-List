import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Notes = ({children}) => {
  return (
    <Col className='col-md-9'>
      <Row xs={1} sm={2} md={2} lg={3} className='g-3'> 
      {children}
      </Row>
    </Col>
  )
}

export default Notes
