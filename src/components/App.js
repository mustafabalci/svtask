import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Home, PostDetail, ProfileDetail } from "../pages";

import "../styles/index.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" component={Home} />
        <Route path="/post-detail" component={PostDetail} />
        <Route path="/profile-detail" component={ProfileDetail} />
      </Layout>
    </Router>
  );
};

export default App;
