import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [],
    createTodo: (todo) => { },
    editTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted : (id)=>{}
});

export const TodoContextProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}




