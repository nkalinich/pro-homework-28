import React from 'react';
import './App.css';
import FormTodo from './components/AddTodo';
import ToDoList from './components/TodoList';
import Context from './context';

function App() {

  const [ todos, setTodos ] = React.useState([
    { id: 1, title: 'Buy bread', completed: false },
    { id: 2, title: 'Buy milk', completed: false },
    { id: 3, title: 'Buy choco', completed: false },
  ]);

  function toggleList(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    )
  };

  function deleteItem(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    if(title) {
      setTodos(todos.concat([{
        id: todos.length +1,
        title,
        completed: false,
      }]))
    } else alert("Field is empty");
  };

  return (
    <Context.Provider value={{ toggleList, deleteItem , addTodo}}>
      <div className="wrapp">
          <div className="bg">
              <div className="container">
                  <h1 className='title'>TODO LIST</h1>

                  <FormTodo addTodo={addTodo} />

                  { todos.length ? <ToDoList todos={todos} /> : <p>You don't have unfinished tasks</p> }
              </div>
          </div>
      </div>
    </Context.Provider>
  );
}

export default App;