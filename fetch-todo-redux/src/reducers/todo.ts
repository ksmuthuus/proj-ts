import { GetToDoAction, ToDo, ActionTypes } from "../actions"

export const todoReducer=(state:ToDo[]=[], action:GetToDoAction) => {
  switch(action.type){
    case ActionTypes.getToDos:
      return action.payload
    default:
      return state
  }
}