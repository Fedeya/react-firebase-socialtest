import React from "react";
import { Formik, Form, Field } from "formik";
import firebase from "firebase";

function CreatePost() {

  const uploadPost = async v => {

    const { displayName, uid } = firebase.auth().currentUser;

    await firebase.database().ref("/posts/").push({
      title: v.title,
      content: v.content,
      author: displayName,
      authorUid: uid
    });
  }

  return (
    <div className="card">
      <Formik
        initialValues={{
          title: "",
          content: ""
        }}
        onSubmit={uploadPost}
      >
        <Form>
          <div className="card-header">
            <div className="form-group">
              <Field type="text" name="title" className="form-control" placeholder="Title" />
            </div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <Field className="form-control" component="textarea" name="content" placeholder="Content for you post" />
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success btn-block" type="submit">Upload Post</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;