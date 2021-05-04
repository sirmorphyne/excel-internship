import React,{useContext} from "react";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {FirebaseContext} from '../context/firebase';
export default function Header() {

  const {firebase}= useContext(FirebaseContext);
  const user=firebase.auth().currentUser || {};

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Find Jobs Here {user.displayName}</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" onClick={()=> firebase.auth().signOut()} >Sign Out</Button>
        </Form>
        </Container>
      </Navbar>

  );
}
