import logo from './logo.svg';
import './App.css';
import CourseManager from './components/course-manager'
import CourseEditor from './components/course-editor/course-editor'
import Home from "./components/home"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <Route path="/" exact={true}><Home/></Route>
      <Route path="/manager" component={CourseManager}/>
      <Route path="/editor" render={ (props) => <CourseEditor{...props}/> } />
    </div>
      
    </BrowserRouter>
  );
}

export default App;
