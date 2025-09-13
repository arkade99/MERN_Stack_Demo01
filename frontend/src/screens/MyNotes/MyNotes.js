import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainScreen } from "../../components/MainScreen/MainScreen";
import { Container, Button, Badge, Accordion } from "react-bootstrap";
import { MyNotesStyle } from "./MyNotesStyle";
import axios from "axios";

export const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      //dispatch(deleteNoteAction(id));
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  console.log("axios data: ", notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MyNotesStyle>
      <Container>
        <MainScreen title={"Arka"} />
        <Link to="/createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create new Note
          </Button>
        </Link>
        <Accordion>
          {notes.map((note) => (
            <Accordion.Item eventKey={note._id}>
              <Accordion.Header>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
                <div>
                  <Button href={`/note/${note._id}`} className="me-3">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="me-3"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <h4>
                  <Badge bg="success">{note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">created on</footer>
                </blockquote>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </MyNotesStyle>
  );
};
