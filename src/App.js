import { Container } from "react-bootstrap";
import ToDoApp from "./components/TodoApp";
import NoteForm from "./components/TodoApp/NoteForm/NoteForm";
import Header from "./components/header/Navbar";
import Notes from "./components/TodoApp/Notes/Notes";
import Note from "./components/TodoApp/Notes/Note/Note";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  
  const [note, setNote] = useState([])

  useEffect(() => {
    axios("https://65775f52197926adf62e1e37.mockapi.io/api/v1/todo")
    .then(res => setNote(res.data))
  }, [])
  


  return (
    <>
      <Header/>
    <Container>
      <ToDoApp>
        <NoteForm setNote={setNote} note={{note}}/>
        <Notes>
          <Note note={note} setNote={setNote}/>
        </Notes>
      </ToDoApp>
    </Container>
    </>
  );
}

export default App;
