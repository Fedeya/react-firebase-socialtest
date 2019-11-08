import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { BarLoader } from "react-spinners";
import firebase from "firebase";

function Login(props) {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = user => {
    setError("");
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
      setLoading(false);
      props.history.push("/");
    }).catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }

  return (
    <div className="animated fadeIn fast" >
      <BarLoader loading={loading} color="rgb(100, 100, 255)" widthUnit="%" width="100" />
      <div className="container mx-auto w-75 mt-3">
        <h1 className="text-center">Log into SocialTest</h1>
        {
          error.length > 0 && (
            <p className="alert alert-danger">
              {error}
            </p>
          )
        }
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={login}
        >
          <Form>
            <div className="form-group">
              <Field name="email" type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <Field name="password" type="password" className="form-control" placeholder="Password" />
            </div>
            <button className="btn btn-primary btn-block" type="submit">Log In</button>
          </Form>
        </Formik>
        <p className="text-center mt-2">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;