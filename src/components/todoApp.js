import { useState } from "react";
import Todo from "./todo";
import Languages from "./languages"
import "./todoApp.css";


const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [lang, setLang] = useState(false);

 
    const [text, setText] = useState({
        title:'Escribe tus tareas',
        create: 'Crear tarea',
        edit: 'Editar',
        remove:'Remove',
        update: 'Actualizar'
      }
    );

  const handleChange = (event) => {
    const value = event.target.value;

    setTitle(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle("");
  };
  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };
  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  };
  const handleLanguage = ()=>{
    setLang(!lang)
    if(lang){
      setText({...text,
        title:'Escribe tus tareas',
        create: 'Crear tarea',
        edit: 'Editar',
        remove:'Remover',
        update: 'Actualizar'
      })
    }else{
      setText({...text,
        title:'Write your homework',
        create: 'Create to-do',
        edit: 'Edit',
        remove:'Remove',
        update: 'Update'
      })
    }
  }
  return (
    <div>
      
      <Languages click={handleLanguage} Language={lang}/>
    
    <div className="todoContainer">
      <h1>
        {text.title}
      </h1>
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value={text.create}
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            Edit={text.edit} 
            Delete={text.remove}
            Update={text.update}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TodoApp;
