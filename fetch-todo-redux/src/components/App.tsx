import { Component } from "react";
import React from "react";
import { ToDoList } from "./ToDoList";



export class App extends Component{

render():JSX.Element{
  return <div>
    <div>
      <ToDoList/>
    </div>
    </div>
}
}
