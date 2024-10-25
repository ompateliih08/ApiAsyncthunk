import { useDispatch,useSelector } from 'react-redux';
import {fetch} from  './redux/todo'
import './App.css';

function App() {
  const dispatch=useDispatch();
  return (
    <div className="App">
     <button onClick={(e)=>dispatch(fetch())}>Fetch products</button>
    </div>
  );
}

export default App;
