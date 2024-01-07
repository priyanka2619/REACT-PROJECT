import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const [editingId, setEditingId] = useState(null);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        if (editingId !== null) {
            const todoToEdit = todos.find((todo) => todo.id === editingId);
            const inputElement = document.getElementById('todoInput');

            if (todoToEdit && inputElement) {
                setInput(todoToEdit.title);
                inputElement.focus();
            }
        }
    }, [editingId, todos]);

    const addOrUpdateTodo = (e) => {
        e.preventDefault();
        if (editingId !== null) {
            dispatch(updateTodo({ id: editingId, title: input }));
            setEditingId(null);
        } else {
            dispatch(addTodo(input));
        }
        setInput('');
    };

    return (
        <form onSubmit={addOrUpdateTodo} className="flex items-center space-x-3 mt-12">
            <input
                id="todoInput"
                type="text"
                className="flex-grow bg-gray-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {editingId !== null ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    );
}

export default AddTodo;
