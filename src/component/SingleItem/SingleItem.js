import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleItem.module.css";

function SingleItem({ post }) {
  return (
    <div className={`card mb-5 shadow p-3 ${styles.card}`}>
      <div className="card-header">
        <Link to={"/singlePost/" + post.id} key={post.id} post={post}>
          <h2 className={styles.h2}>{post.title}</h2>
        </Link>
        <p>{post.body}</p>
        <hr />
      </div>
    </div>
  );
}

export default SingleItem;
