import {Dispatch} from 'redux'
import axios from 'axios'

import { ActionTypes } from "./types"


export interface ToDo{
  id:number,
  title:string,
  completed:boolean
}

export interface GetToDoAction{
  type: number,
  payload : ToDo[]
}

export const getToDos = () => async (dispatch:Dispatch) => {
  const response = await axios.get<ToDo[]>('http://jsonplaceholder.typicode.com/todos')
  dispatch<GetToDoAction>({
  type:ActionTypes.getToDos,
  payload:response.data
  })
 }
