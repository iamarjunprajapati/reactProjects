import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoForm() {
    const [todo, setTodo] = useState({});
    const { createTodo, todos } = useTodo();
    const add = (e) => {
        e.preventDefault();
        createTodo({
            id: Date.now(),
            todo, 
            completed: false
        });
        // console.log(todos);
    }



    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo.todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={(e) => add(e)}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

