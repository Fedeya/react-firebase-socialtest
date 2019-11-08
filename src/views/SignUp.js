import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { BarLoader } from "react-spinners";
import firebase from "firebase";

function SignUp(props) {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const createAccount = v => {
    setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(v.email, v.password).then(async ({ user }) => {
      await user.updateProfile({
        displayName: v.name
      });
      firebase.database().ref("/users/").child(user.uid).update({
        name: v.name,
        email: v.email
      }).then(() => setLoading(true));
      props.history.push("/");
    }).catch(err => {
      setError(err.message);
      setLoading(false);
    });


  }

  return (
    <div className="animated fadeIn fast">
      <BarLoader color="rgb(100, 100, 255)" loading={loading} widthUnit="%" width="100" />
      <div className="container mt-3 w-75 mx-auto">
        <h1 className="text-center">Sign Up in SocialTest</h1>
        {
          error.length > 0 && (
            <p className="alert alert-danger">
              {error}
            </p>
          )
        }
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          onSubmit={createAccount}
        >
          <Form>
            <div className="form-group">
              <Field name="name" type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
              <Field name="email" type="email" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
              <Field name="password" type="password" placeholder="Password" className="form-control" />
            </div>
            <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
            <p className="text-center mt-2">You have an account? <Link to="/login">Log In</Link></p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;