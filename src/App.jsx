import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      {
        state.todo.data && state.todo.data.map((e) => (
        <>
        <li>{e.id}  {e.title}</li>
        <hr/>
        </>
        ))
      }
    </>
  )
}

export default App
