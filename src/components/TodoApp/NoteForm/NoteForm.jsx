import React, { useEffect, useState } from 'react'
import { Button, Col, Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios"
import moment from 'moment';
import "moment/locale/tr"




const NoteForm = ({setNote,note}) => {

   
    const [time, setTime] = useState("")
    const [value, setValue] = useState("");

    const handleClick = (text) => { 
      if(!value) return alert("Geçerli bir to do giriniz.")
      if(!time) return alert("Please chooce a deadline!")
        const BASE_URL = "https://65775f52197926adf62e1e37.mockapi.io/api/v1/todo"
        
        axios.post(BASE_URL,{
            title:text,
            date:moment().endOf(`${time}`).fromNow()
        })
        .then(response =>setNote(prev =>[...prev, response.data]))
        .catch(error=>console.error(error))

        setValue("")
     }
    

  return (
    <Col className='col-md-3'>
      <InputGroup>
        <Form.Label id="inputGroup-sizing-default">
          Todo başlığı
        </Form.Label>
      </InputGroup>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Type a new to-do.'
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <Form.Label className='mt-3' id="inputGroup-sizing-default">
           Deadline seçiniz...
        </Form.Label>
        <DropdownButton id="dropdown-basic-button" title={time === "day" ? "Today":"This Week"}>
        <Dropdown.Item href="#/action-2" onClick={()=> setTime("day")}>Today</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=> setTime("week")}>This Week</Dropdown.Item>
      </DropdownButton>
      <Button variant='info' className='my-3' onClick={()=>handleClick(value)}>Create A Note</Button>
    </Col>
  )
}

export default NoteForm
