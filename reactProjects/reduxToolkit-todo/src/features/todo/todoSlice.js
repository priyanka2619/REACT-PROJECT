// todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, title: 'Daily Routine' }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;

            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.title = title;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
