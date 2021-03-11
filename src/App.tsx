import React, { useRef, useState } from 'react';
import { Button, Container, FormControl, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from "react-redux";
import {deleteTodo,markComplete,markIncomplete} from "./action/index"
import storeType from "./types/storeType";
import AppPropType from "./AppPropType";

const App:React.FC<AppPropType> = ({complete,incomplete,deleteTodo,markComplete,markIncomplete}) => {
  
  const input = useRef<HTMLInputElement>(null);
  // const [name,setName] = useState(null);
  
  const renderList = (type: "Complete" | "InComplete") => {
    const looper = type === "Complete" ? complete : incomplete;

    return (
      <ListGroup variant="flush" className="m-2">
      <h3>{type}</h3>
      {looper.map((todo,index) => {return  (
        <ListGroupItem  key={index} variant={type === "Complete" ? "success" : "danger"} style={{display:"flex", justifyContent:"space-between"}}>
        <div>{todo}</div>
        <div>
          <span className="m-2" style={{cursor: "pointer"}} onClick={() => type === "Complete" ? markIncomplete(todo) : markComplete(todo)}>{type === "Complete" ? "InComplete" : "Complete"}</span>
          <span className="m-2" style={{cursor: "pointer"}} onClick={() => deleteTodo(todo)}>Delete</span>
        </div>
      </ListGroupItem> 
      )
      })}
      
    </ListGroup>
    );
  }
  
  const addTodo = () => {
    if(input.current){
      const val = input.current.value;
      if(val){
        
        markIncomplete(val);
        input.current.value = ""
      }else{
        alert("No todo")
      }

    }
  }
  

 
  
  return (
    <Container>
      <InputGroup className="m-3">
        <FormControl placeholder="Todo" 
          ref={input} 
          className="mr-2"
   
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={() => addTodo()} className="mr-2">
              <i className="fas fa-plus mr-3"></i>
              Add
            </Button>
           
          </InputGroup.Append>
      </InputGroup>
      
      {renderList("Complete")}
      {renderList("InComplete")} 
      
    </Container>
  );
}

const mapStatetoProps = (state: storeType ) => {
  return {
    complete: state.complete,
    incomplete: state.incomplete
  }
}

export default connect(mapStatetoProps, {deleteTodo,markComplete,markIncomplete})(App);
