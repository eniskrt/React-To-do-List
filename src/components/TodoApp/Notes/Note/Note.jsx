import { Button, CardFooter, Col, Form,} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios"
import { useEffect, useState } from 'react';

function Note({note,setNote}) {

  const [checked, setChecked] = useState(false)

  const deleteNote = (id) => { 
     axios.delete(`https://65775f52197926adf62e1e37.mockapi.io/api/v1/todo/${id}`)
    .then(response =>{setNote(prevNotes => prevNotes.filter(note => note.id !== id))})
    .catch(error=>console.error(error))
 }

 const handleChecked = async (id) => {

  if(!checked){

    await axios.put(`https://65775f52197926adf62e1e37.mockapi.io/api/v1/todo/${id}`,{checked:true})
      .then(response => {
        const newNotes = note.map(not => {
          if (not.id === id) {
            not.checked = response.data.checked;
          }
          return not;
        })
        setNote(newNotes)
      });
  
    setChecked(true);
  }else{
    await axios.put(`https://65775f52197926adf62e1e37.mockapi.io/api/v1/todo/${id}`,{checked:false})
    .then(response => {
      const newNotes = note.map(not => {
        if (not.id === id) {
          not.checked = response.data.checked;
        }
        return not;
      })
      setNote(newNotes)
    });

  setChecked(false);
  }
};
useEffect(() => {
  
}, [checked])

console.log(note);
 
  return (
    <>
      {note.map((variant,index) => (
        <Col key={index}>
        <Card
          className={variant.checked ? "bg-success text-light h-100 mb-2":"mb-2 h-100"}
        >
          <Card.Body>
            <Card.Title>{variant.title}</Card.Title>
            <Card.Text>Bitiş zamanına {(variant.date).substring(0,6)}{variant.date==="day"?"t":""} var.</Card.Text>
          </Card.Body>
          <CardFooter className='d-flex align-items-center justify-content-center'>
          <Form.Check type="switch" checked={variant.checked} id="custom-switch" onChange={()=> handleChecked(variant.id)}/>
          <Button variant='info' className='bg-transparent border-0 text-danger'><FaRegTrashAlt size={"1.5rem"} onClick={()=>deleteNote(variant.id)}/></Button>
          </CardFooter>
        </Card>
        </Col>
      ))}
    </>
  );
}

export default Note;