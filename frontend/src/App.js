import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./component/registration/signin";
import SignUp from "./component/registration/signUp";
import MovieCreate from "./component/movieCreate/movieCreate";
import Dashbord from "./component/dashbord/dashbord";
function App() {
  return (
    <div className="app">
     
   
      <Router>
        <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashbord/>}/>
        <Route path="/movieCreate" element={<MovieCreate/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
