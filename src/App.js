// import logo from "./logo.svg";
import "./App.css";
import Cardmap from "./view/Cardmap";
import Header from "./view/Header";
import Carddetail from "./view/Carddetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Changepassword from "./Components/Chagepassword";
import Profile from "./Components/Profile";
import EditProfile from "./Components/Editprofile";
import { Fragment } from "react";
import Protetedroutes from "./app/protetedroutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Pagination/> */}
        <Routes>
          <Route path="/:id" element={<Carddetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Protetedroutes />}>
            <Route
              path="/log"
              element={
                <Fragment>
                  <Header />
                  <Cardmap />
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
