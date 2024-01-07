import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo/todoSlice';

function TodoItems() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');

    const handleUpdate = (id, title) => {
        dispatch(updateTodo({ id, title }));
        setEditingTodoId(null);
    };

    return (
        <>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className={`mt-4 flex justify-between items-center ${editingTodoId === todo.id ? 'bg-gray-200' : 'bg-gray-300'
                            } px-4 py-2 rounded`}
                        key={todo.id}
                    >
                        {editingTodoId === todo.id ? (
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleUpdate(todo.id, editedTitle);
                                        }
                                    }}
                                    onBlur={() => setEditingTodoId(null)}
                                    autoFocus
                                    className="bg-transparent border-none outline-none text-black"
                                />
                            </div>
                        ) : (
                            <div className="text-black">{todo.title}</div>
                        )}
                        <div className="flex space-x-2">
                            <button
                                onClick={() => {
                                    setEditedTitle(todo.title);
                                    setEditingTodoId(todo.id);
                                }}
                                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10zm2 0a2 2 0 012 2v10m-2-2l2 2-4 4-2-2 4-4zM5 3l2 2-4 4 2 2 4-4"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={() => dispatch(deleteTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoItems;
