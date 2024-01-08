import React from 'react'
import { Row } from 'react-bootstrap'


const ToDoApp = ({children}) => {
  return (
      <Row className='my-3'>
      
        {children}

    </Row>
  )
}

export default ToDoApp
