import React, { Suspense, lazy } from "react";
import "./App.css";
import { Fragment } from "react";
import Protetedroutes from "./app/protetedroutes";
import Spinner from "react-bootstrap/Spinner";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Error from "./Pages/View/Error";
const Cardmap = lazy(() => import("./Components/Cardmap"));
const Header = lazy(() => import("./Components/Header"));
const Carddetail = lazy(() => import("./Components/Carddetail"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Signup = lazy(() => import("./Pages/Auth/Signup"));
const Changepassword = lazy(() => import("./Pages/Auth/Chagepassword"));
const Profile = lazy(() => import("./Pages/View/Profile"));
const EditProfile = lazy(() => import("./Pages/View/Editprofile"));

function App() {
  return (
    // Public and Public Both Routes.
    <div>
      <BrowserRouter>
        {/* <Pagination/> */}
        <Suspense
          fallback={<Spinner animation="border" role="status"></Spinner>}
        >
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
            <Route element={<Protetedroutes />}>
              <Route path="/:id" element={<Carddetail />} />
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
              {/* <Route exact path="/login" element={<Cardmap />} />
              <Route exact path="/login" element={<Cardmap />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
