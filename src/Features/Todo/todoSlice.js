

// createSlice  is version of reducer 
// reducer is functionality
// in reducer inside  property and function

import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                //nanoid is used for unique id
                text: action.payload 
                //payload is object it contain any id, email etc
            }
            state.todos.push(todo)
        
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
// we export these functionlity because  they use in components

export default todoSlice.reducer
//if we made more reducer like todoSlice then we will export all of them 
