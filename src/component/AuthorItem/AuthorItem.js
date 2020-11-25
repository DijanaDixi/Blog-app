import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthorItem.module.css";

function AuthorItem({ author, numberPosts }) {
  return (
    <div className={`card mb-3 shadow p-3 rounded" ${styles.card}`}>
      <blockquote className="blockquote mb-0">
        <Link to={"/author/" + author.id}>
          <h2>
            {author.name}
            <span>{`(${numberPosts} posts)`}</span>
          </h2>
        </Link>
      </blockquote>
    </div>
  );
}

export default AuthorItem;
