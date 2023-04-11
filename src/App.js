// import logo from "./logo.svg";
import "./App.css";
import Cardmap from "./view/pages/Cardmap";
import Header from "./Components/Header";
import Carddetail from "./Components/Carddetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./view/auth/Login";
import Signup from "./view/auth/Signup";
import Changepassword from "./view/auth/Chagepassword";
import Profile from "./Components/Profile";
import EditProfile from "./Components/Editprofile";
import { Fragment } from "react";
import Protetedroutes from "./app/protetedroutes";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Pagination/> */}
        <Routes>
          <Route path="/:id" element={<Carddetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route element={<Protetedroutes />}>
            <Route exact path="/header" element={<Header />} />
            <Route
              path="/login"
              element={
                <Fragment>
                  <Header />
                </Fragment>
              }
            />
            <Route
              path="/product"
              element={
                <Fragment>
                  <Header />
                  <Cardmap />
                </Fragment>
              }
            />
            <Route
              path="/profile"
              element={
                <Fragment>
                  <Header />
                  <Profile />
                </Fragment>
              }
            />
            <Route
              path="/editprofile"
              element={
                <Fragment>
                  <Header />
                  <EditProfile />
                </Fragment>
              }
            />
            <Route
              path="/changepass"
              element={
                <Fragment>
                  <Header />
                  <Changepassword />
                </Fragment>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
