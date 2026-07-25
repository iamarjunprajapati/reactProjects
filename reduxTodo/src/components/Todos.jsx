import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, editTodo } from '../features/todo/todoSlice';

function Todos() {
    const [isEditable, setIsEditable] = useState(false);
    const [editableId, setEditableId] = useState(null);
    const todos = useSelector((state => state.todos));
    const [todoText, setTodoText] = useState()
    const dispatch = useDispatch();

    const handleEdit = (todo) => {
        setIsEditable(!isEditable);
        setEditableId(todo.id);
        setTodoText(todo.text);

        if (isEditable) {
            dispatch(editTodo({
                id: todo.id,
                text: todoText,
            }))
        }
    }

    // useEffect(() => {

    // }, [todoText])

    return (
        <>
            <ul className="list-none mt-4">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 text-whhite rounded"
                        key={todo.id}
                    >
                        <input type="text" name="" id="" value={editableId === todo.id ? todoText : todo.text} onChange={(e) => setTodoText(e.target.value)} readOnly={editableId !== todo.id} className='text-white' />
                        <button
                            onClick={() => { handleEdit(todo); }}
                            className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
                        >{editableId === todo.id ? "Save" : "Edit"}</button>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
                        >X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
