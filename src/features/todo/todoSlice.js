import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{ id: 1, text: 'Hello World' }],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo) //it will add the changes in todos state 
    },
    removeTodo: (state , action) => {
        state.todos = state.todos.filter((todo)=>todo.id !==  action.payload)
    },
    updateTodo: (state,actions) =>{

    }
  },
})

export const {addTodo,removeTodo,updateTodo } = todoSlice.actions   //for usgae in components 

export default todoSlice.reducer    // it is for store to recognise the reducers 