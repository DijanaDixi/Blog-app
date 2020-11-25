import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Authors from "./component/Authors/Authors";
import About from "./component/About/About";
import SinglePost from "./component/SinglePost/SinglePost";
import Author from "./component/Author/Author";
import NewPost from "./component/NewPost/NewPost";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Header />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/newPost">
          <NewPost />
        </Route>

        <Route path="/authors">
          <Authors />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/singlePost/:id">
          <SinglePost />
        </Route>

        <Route path="/author/:id">
          <Author />
        </Route>

      </BrowserRouter>
    </>
  );
}

export default App;
