import React, { useEffect, useState } from "react";
import SingleItem from "../SingleItem/SingleItem";
import styles from "./Home.module.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [didMount, setDidMount] = useState(false);

  // all posts
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        let posts = json.slice(0, 5);
        setPosts(posts);
      });
  };
  useEffect(() => {
    fetchPosts();
    setDidMount(true);
    return () => setDidMount(false);
    // This way you are sure that
    // if your component is unmounted you are not trying to fetch something.
  }, []);

  if (!didMount) {
    return null;
  }

  const allPosts = posts.map((post) => {
    return <SingleItem post={post} key={post.id} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className={styles.title}>Posts</h2>
          <div>{allPosts} </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
