import logo from './logo.svg';
import './App.css';
import CourseManager from './components/course-manager'
import CourseEditor from './components/course-editor'

function App() {
  return (
    <div className="container-fluid">
      Hello World from App!!!
      <CourseManager/>
      <CourseEditor/>
    </div>
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
