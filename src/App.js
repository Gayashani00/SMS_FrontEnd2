import './App.css';
import BackgroundSlider from './BackgroundSlider';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddStudents from './users/AddStudents';
import EditStudents from './users/EditStudents';
import ViewStudents from './users/ViewStudents';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      {/* <div className="bg">

      </div> */}
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route exact path="/menu"  element={<Menu/>}/>
      <Route exact path="/AddStudents" element={<AddStudents/>}/>
      <Route exact path="/EditStudents/:id" element={<EditStudents/>}/>
      <Route exact path="/viewstudents/:id" element={<ViewStudents/>}/>
      </Routes>
      


      </Router>
      
    </div>
  );
}

export default App;
