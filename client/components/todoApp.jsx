"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  
  const addTodo = async (e) => {
    e.preventDefault();
    const formData = { title };
    try {
      const response = await axios.post("http://localhost:8001/user", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      alert("TODO item added");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  }

  
  useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8001/user");
      setTodos(response.data);
    } catch (err) {
      console.log(err, "an error occurred");
    }
  };
  const editTodo = async (id) => {
    const newTitle = prompt("Edit your todo:", todos.find((todo) => todo._id === id).title);
    if (newTitle !== null) {
      try {
        const response = await axios.put(`http://localhost:8001/user/${id}`, { title: newTitle }, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        fetchData()
        alert("TODO item updated");
      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      }
    }
  };

  const deleteTodo = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this Todo item?");
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:8001/user/${id}`);
        setTodos(todos.filter((todo) => todo._id !== id));
        alert('Deleted successfully');
      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl mb-4">TODO APP</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="p-2 border rounded mr-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="p-2 bg-blue-500 text-white rounded" onClick={addTodo}>
            Add Todo
          </button>
        </div>
         <div className="w-full">
         {todos.map((list, index) => (
            <div key={index} className="flex justify-between items-center p-2 mb-2 bg-gray-100 rounded">
              <span>{list.title}</span>
              <div className="flex space-x-2">
                <FaEdit className="text-yellow-500 cursor-pointer" onClick={()=>editTodo(list._id)}  />
                <FaTrash className="text-red-500 cursor-pointer"  onClick={() => deleteTodo(list._id)} />
              </div>
            </div>
            ))}
        </div> 
      </div>
    </div>
  );
}

export default TodoApp;
