import React from "react";
import { useEffect, useState } from "react";
import AuthorItem from "../AuthorItem/AuthorItem";
import { withRouter } from "react-router-dom";
import styles from "./Authors.module.css";

function Authors(props) {
  const [authors, setAuthors] = useState([]);
  const [didMount, setDidMount] = useState(false);
  const [numberPosts, setNumberPosts] = useState();

  // all authors-list
  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let authors = json.slice(0, 8);
        setAuthors(authors);
      });
  };

  useEffect(() => {
    fetchPost();
    setDidMount(true);
    return () => setDidMount(false);
  }, []);
  if (!didMount) {
    return null;
  }

  const AllAuthors = authors.map((author) => {
    var id = author.id;
    fetch("https://jsonplaceholder.typicode.com/posts?/userId=" + author.id)
      .then((response) => response.json())
      .then((json) => {
        let filter = json.filter((author) => author.userId === id);
        console.log(filter);
        setNumberPosts(filter.length);
      });
    return (
      <AuthorItem author={author} key={author.id} numberPosts={numberPosts} />
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 ">
          <h2 className={styles.title}>AUTHORS</h2>
          {AllAuthors}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Authors);
