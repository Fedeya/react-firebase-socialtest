import React from "react";
import firebase from "firebase";

function Profile(props) {

  const { displayName, email } = firebase.auth().currentUser;

  const closeAccount = () => {
    firebase.auth().signOut();
    props.history.push("/");
  }

  return (
    <div className="animated fadeIn fast">
      <div className="container mt-3">
        <h1>{displayName}</h1>
        <h4>{email}</h4>
        <button className="btn btn-danger" onClick={closeAccount}>Sign Out</button>
      </div>
    </div>
  );
}

export default Profile;