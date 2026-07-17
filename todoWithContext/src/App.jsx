import { Children, useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from "./components/TodoItem"
import { TodoContextProvider } from './contexts/todoContext'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const prevTodos = JSON.parse(localStorage.getItem("todos"));

    if (prevTodos && prevTodos.length > 0) setTodos(prevTodos);

  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  const createTodo = (todo) => {
    setTodos([todo, ...todos]);
  }
  const editTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((eachTodo) => eachTodo.id === id ? { ...eachTodo, todo: todo.todo } : { ...eachTodo }))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }



  return (
    <TodoContextProvider value={{ createTodo, editTodo, deleteTodo, toggleCompleted, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (<TodoItem todo={todo} key={todo.id} />))}
            {/* todo item */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
