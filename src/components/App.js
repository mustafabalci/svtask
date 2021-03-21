import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Home, PostDetail, ProfileDetail } from "../pages";
import "../styles/index.css";
import { fetchPosts } from "../actions/postActions";
import { connect } from "react-redux";

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post-detail/:id" component={PostDetail} />
          <Route path="/profile-detail/:id" component={ProfileDetail} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default connect()(App);
