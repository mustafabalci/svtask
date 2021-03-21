import React, { useEffect } from "react";
import ListItem from "../components/ListItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Home = ({ dispatch, loading, posts, failed }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>İçerikler yükleniyor...</p>;
    if (failed) return <p>Veri alınırken bir hata meydana geldi.</p>;
    console.log(posts);
    return posts.map((post) => (
      <ListItem key={post.id} order={post.id} post={post} />
    ));
  };

  return <>{renderPosts()}</>;
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  failed: state.posts.failed,
});

export default connect(mapStateToProps)(Home);
