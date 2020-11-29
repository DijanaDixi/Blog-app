import React from "react";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Author.module.css";

function Author(props) {
  const [author, setAuthor] = useState([]);
  const [didMount, setDidMount] = useState(false);

  const id = props.match.params.id;

  // Author page
  const fetchAuthor = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        let author = json;
        setAuthor(author);
      });
  };

  useEffect(() => {
    fetchAuthor();
    setDidMount(true);
    return () => setDidMount(false);
    // eslint-disable-next-line
  }, []);

  if (!didMount) {
    return null;
  }

  // Nested Object
  const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce(
      (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
      nestedObj
    );
  };

  // address
  const street = getNestedObject(author, ["address", "street"]);
  const zipcode = getNestedObject(author, ["address", "zipcode"]);
  const lat = getNestedObject(author, ["address", "geo", "lat"]);
  const lng = getNestedObject(author, ["address", "geo", "lng"]);

  // company
  const company = getNestedObject(author, ["company", "name"]);
  const phrase = getNestedObject(author, ["company", "catchPhrase"]);

  return (
    <div className="container">
      <Link to="/authors" className={styles.back}>
        <span>{`<`}</span> All Authors
      </Link>
      <h1 className={styles.title}>Author</h1>

      {/* Name Surname */}
      <div className={`row ${styles.alignItems}`}>
        <div className="col-6 mt-80 ">
          <div >
            <img src='https://i.pinimg.com/originals/da/9c/be/da9cbe0a07b10fe8444f5c8a1c7a2c38.jpg' alt=""/>
          </div>
        </div>
        <div className="col-4">
          <h2>{author.name}</h2>
          <div className={styles.details}>
            <p>{`Username:  ${author.username}`}</p>
            <p>{`Mail: ${author.email}`}</p>
            <p>{`Phone: ${author.phone}`}</p>
          </div>
        </div>
      </div>
      {/* Name Surname End */}
      <hr />

      {/* Address */}
      <div className="row">
        <div className="col-6">
          <h2>Address</h2>
          <div className={styles.details}>
            <p>{`Street: ${street}`}</p>
            <p>{author?.address?.city || "- -"}</p>
            <p>{`Zipcode: ${zipcode}`}</p>
          </div>
        </div>
        <div className="col-4">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title={street}
            frameBorder="0"
          
            src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
          />
        </div>
      </div>
      <hr />
      {/* Addres End */}

      {/* Company */}
      <div className="row">
        <div className="col-6">
          <h2>Company</h2>
          <div className={styles.details}>
            <p>{`Name:  ${company}`}</p>
            <p>{`Phrase:  ${phrase}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Author);
