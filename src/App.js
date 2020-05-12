import React, { useState, useEffect, useRef, useReducer } from 'react';
import { useFetch } from './useFetch';
import TodoList from './TodoList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case 'toggle-todo':
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
      };
    default:
      return state;
  }
};

const App = () => {
  // const [{ count1, count2 }, setCount] = useState({ count1: 20, count2: 30 });

  const [values, handleChange] = useState({ email: '', password: '' });
  const [showHello, setShowHello] = useState(true);
  // const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

  const inputRef = useRef();

  // useEffect(() => {
  //   console.log('render');
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('count', JSON.stringify(count))
  // }, [count]);

  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });

  // const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  // const data = useFetch('');

  // useEffect(() => {
  //   console.log('password changed');
  // }, [values]);

  const [text, setText] = useState();

  return (
    <div className='App'>
      <TodoList />

      {/* <form onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'add-todo', text });
        setText("");
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((t, idx) => <div key={t.text} onClick={e => dispatch({ type: 'toggle-todo', idx })} style={{ textDecoration: t.completed? 'line-through': ''}}>{t.text}</div>)} */}

      {/* <div>{count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button> */}

      {/* <div> {!data ? 'loading...' : data}</div>
      <button onClick={()=> setCount(count+1)}>incremenet</button> */}
      {/* <button onClick={() => setCount(currentState => ({
        ...currentState,
        count1: currentState.count1 + 1
      }))}>+</button>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div> */}
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
      {/* {showHello && <Hello />}
      <input ref={inputRef} type="email" name="email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" value={values.password} onChange={handleChange} />

      <button onClick={()=> inputRef.current.focus()}>focus</button> */}
    </div>
  );
};

export default App;
