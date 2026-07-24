import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText("")
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a Todo..."
                className="w-full rounded-l-lg border border-gray-700 bg-gray-800 px-3 py-2 text-base text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
            />
            <button type="submit" className="shrink-0 rounded-r-lg border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"

            >
                Add
            </button>
        </form>
    )
}

export default AddTodo