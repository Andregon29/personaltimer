import './App.css';
import Home from './Home';
import './Navbar.css'
import Timer from './Timer.js';
import TodoList from './TodoList.js';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <div className='navbar-container'>
          <ul>
            <Link to='/start'>Start</Link>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </ul>
        </div>

          <Routes>
            <Route path='/start' element={[<TodoList/>,<Timer/>]}/>
            <Route  path='/' element={<Home/>} />
          </Routes>

      </Router>
   </div>
  );
}

export default App;
