// import logo from "./logo.svg";
import "./App.css";
import Cardmap from "../src/Components/Cardmap";
import Header from "../src/Components/Header";
import Carddetail from "./Components/Carddetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Changepassword from "./Auth/Chagepassword";
import Profile from "./Auth/Profile";
import EditProfile from "./Auth/Editprofile"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepass" element={<Changepassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cardmap" element={<Cardmap />} />
          <Route path="/:id" element={<Carddetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
