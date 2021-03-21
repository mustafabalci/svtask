import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PostDetail = ({ match, posts, loading }) => {
  const [post, setPost] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!loading) {
      setPost(posts.find((post) => post.id === Number(match.params.id)));
    }
  }, [posts]);

  return (
    <div>
      {!post ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <a onClick={() => history.push(`/profile-detail/${post.userId}`)}>
            Yazar sayfasına git
          </a>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
});
export default connect(mapStateToProps)(PostDetail);
