import React, { Component } from "react";
import { connect } from "react-redux";
import {ToDo, getToDos} from '../actions'
import {StoreState} from '../reducers'

interface AppProps {
  todos: ToDo[];
  getToDos: Function;
}

interface AppState{
  fetching:boolean
}

class _ToDoList extends Component<AppProps, AppState>{

constructor(props:AppProps){
  super(props)
  this.state = {fetching:false}
}

componentDidUpdate(prevProps:AppProps):void{
  if(!prevProps.todos.length && this.props.todos.length){
    this.setState({fetching:false})
  }
}

fetchClick = ():void => {
  this.props.getToDos()
  this.setState({fetching:true})
}

renderList():JSX.Element[]{
  return (this.props.todos.map((todo:ToDo)=> {
    return <div key={todo.id}>{todo.title}</div>
  }))
}

  render(){
      return(
      <div>
        <button onClick={this.fetchClick}>Fetch</button>
        <div>{this.state.fetching ? 'Loading' : null}</div>
        {this.renderList()}
      </div>)
  }


}

const mapStateToProps = (state:StoreState):{todos:ToDo[]} => {
  return {todos: state.todos}
}

export const ToDoList = connect(mapStateToProps,{getToDos})(_ToDoList)