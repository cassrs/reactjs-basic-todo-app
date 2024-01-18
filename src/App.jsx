import { useState } from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import "./assets/styles/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const Button = styled.button`
  background-color: #008e00;
  color: white;
  border: none;
  padding: 6px 30px;
  margin-left: 15px;
  border-radius: 10px;
  &:hover{
    transition: .2s ease-in-out;
    background-color: #007200;
  }
`;


function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='main-container'>
      <h1 className='py-5 text-center text-white'>Basic Todo App</h1>
      <Container className='app-wrapper'>
        <div className='main-app'>
          <input type="text" value={todoInput} onChange={handleInputChange} id='todo' placeholder='Hedef' />
          <Button onClick={addTodo}>Ekle</Button>

          <ul>
            {todos.map((todo, index) => (
              <li key={index} onClick={() => removeTodo(index)}> {todo} </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>  
  );
}

export default App;
