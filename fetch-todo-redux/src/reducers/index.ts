import { combineReducers } from "redux"
import { todoReducer } from "./todo"
import { ToDo } from "../actions"


export interface StoreState{
  todos:ToDo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todoReducer
})
