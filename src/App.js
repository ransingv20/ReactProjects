import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Loginform from './components/Loginform'
import Register from './components/Register'
import Homeimages from './components/Homeimages'
import Dashboard from './components/Dashboard'
import AddTask from './components/AddTask';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Homeimages}/>
      <Route  path="/login" component={Loginform}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/addTask" component={AddTask}/>
    </Switch>
    </Router>
   
     
    </div>
  );
}

export default App;
