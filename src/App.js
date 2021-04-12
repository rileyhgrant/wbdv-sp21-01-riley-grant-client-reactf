// import logo from './logo.svg';
import "./App.css";
import CourseManager from "./components/course-manager";
import Quizzes from "./components/quizzes/quizzes";
import Quiz from "./components/quizzes/quiz";

// import CourseEditor from './components/course-editor/course-editor'
import Home from "./components/home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/courses" component={CourseManager} />
        <Route path="/courses/:courseId/quizzes" component={Quizzes} exact={true}/>
        <Route path="/courses/:courseId/quizzes/:quizId" component={Quiz} exact={true}/>
        {/* <Route path="/editor" render={ (props) => <CourseEditor{...props}/> } /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
