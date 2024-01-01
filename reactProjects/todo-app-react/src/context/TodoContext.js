import { useContext, createContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: Date.now(),
            title: 'test',
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider