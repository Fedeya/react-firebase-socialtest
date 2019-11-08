import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BarLoader } from "react-spinners";

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./config";

// Views
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

// IsAuth Views

import Profile from "./views/Profile";
import Dashboard from "./views/Dashboard";


// Components
import Navigation from "./components/Navigation";
import Error404 from "./components/Error404";


firebase.initializeApp(firebaseConfig);


function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) setIsAuth(true);
      else setIsAuth(false);
      setIsReady(true);
      console.log(user);
    })
  }, [])

  if (!isReady) {
    return (
      <>
        <BarLoader color="rgb(100, 100, 255)" loading={!isReady} widthUnit="%" width="100" />
        <h3>Cargando...</h3>
      </>
    )
  }

  return (
    <Router>
      <Navigation isAuth={isAuth} />
      {
        isAuth ? (
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route component={Error404} />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route component={Error404} />
            </Switch>
          )
      }

      <div className="mb-5"></div>

    </Router>
  );
}

export default App;
