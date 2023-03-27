// import logo from "./logo.svg";
import "./App.css";
import Cardmap from "../src/Components/Cardmap";
import Header from "../src/Components/Header";
import Carddetail from "./Components/Carddetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../src/Auth/login"
import Signup from "../src/Auth/signup"
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>   */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Cardmap />} />
          <Route path="/:id" element={<Carddetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
