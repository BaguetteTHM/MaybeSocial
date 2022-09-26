import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login copy"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Login" element={<Login/>}/>
    </Routes>
  </Router>)
}

export default App;
