import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./SinglePost.module.css";

function SinglePost(props) {
  const [post, setPost] = useState([]);
  const [morePosts, setMorePosts] = useState([]);
  const [name, authorName] = useState("");
  const [didMount, setDidMount] = useState(false);

  const id = props.match.params.id;

  // single post
  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => {
        let post = json;
        setPost(post);
      });
  };

  // author name and id for another page Author
  const fetchAuthorName = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        let name = json;
        authorName(name);
      });
  };

  const fetchPostNumber = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
      .then((response) => response.json())
      .then((json) => {
        let morePosts = json.slice(0, 4);
        console.log(morePosts);
        setMorePosts(morePosts);
      });
  };
  const morePostsFromSameAuthor = morePosts.map((post) => {
    return (
      <div key={post.id}>
        <Link to={"/author/" + post.userId} className={styles.linkPosts}>
          <h2>{post.title}</h2>
        </Link>
      </div>
    );
  });

  useEffect(() => {
    fetchPost();
    fetchAuthorName();
    fetchPostNumber();
    setDidMount(true);
    return () => setDidMount(false);
    // eslint-disable-next-line
  }, []);

  if (!didMount) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className={styles.singlePost}>
            <h1 className={styles.title}>{post.title}</h1>
            <Link
              to={"/author/" + name.id}
              className={styles.author}
              morePosts={morePosts}
            >
              <h2>{name.name}</h2>
            </Link>
            <p>{post.body}</p>
            <hr />
            <h2>3 more posts from same author</h2>
            <hr />
            <div>{morePostsFromSameAuthor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SinglePost);
