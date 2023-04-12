import "./App.css";
import Cardmap from "./Components/Cardmap";
import Header from "./Components/Header";
import Carddetail from "./Components/Carddetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./View/auth/Login";
import Signup from "./View/auth/Signup";
import Changepassword from "./View/auth/Chagepassword";
import Profile from "./View/pages/Profile";
import EditProfile from "./View/pages/Editprofile";
import { Fragment } from "react";
import Protetedroutes from "./app/protetedroutes";
function App() {
  return (
    // Public and Public Both Routes.
    <div>
      <BrowserRouter>
        {/* <Pagination/> */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/:id" element={<Carddetail />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/header" element={<Header />} />
          <Route element={<Protetedroutes />}>
            <Route
              path="/log"
              element={
                <Fragment>
                  <Login />
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
