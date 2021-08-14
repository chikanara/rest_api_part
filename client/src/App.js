
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import UserList from './components/UserList/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     <Router>
       <NavBar/>
       <UserList/>
     </Router>
    </div>
  );
}

export default App;
