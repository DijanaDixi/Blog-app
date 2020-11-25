import React from "react";
import styles from "./NewPost.module.css"

function NewPost() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <h2 className={styles.newPost}>NEW POST</h2>
          <h5>Title</h5>
          <div class="input-group mb-3">
            <div class="input-group-prepend"></div>

            <input
              type="text"
              class="form-control"
              placeholder="Post Title"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" class="btn btn-light float-right">
            Cancel
          </button>
          <button type="button" class="btn btn-light float-right  mr-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewPost;
