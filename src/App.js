import logo from './logo.svg';
import './App.css';
import CourseManager from './components/course-manager'
import CourseEditor from './components/course-editor'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/manager" component={CourseManager}/>
      {/* <Route path="/editor" component={CourseEditor}/> */}
      <Route path="/editor" render={ (props) => <CourseEditor{...props}/> } />


      {/* <div className="container-fluid">
        Hello World from App!!!
        <CourseManager/>
        <CourseEditor/>
      </div> */}
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
