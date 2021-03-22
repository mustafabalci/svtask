import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import Profile from "../components/Profile/Profile";

const ProfileDetail = ({ dispatch, loading, user, failed }) => {
  useEffect(() => {
    console.log("asdadas", user);
    dispatch(fetchUser(1));
  }, [dispatch]);

  const renderProfile = () => {
    if (loading) {
      return <p>Kullanıcı bilgisi yükleniyor...</p>;
    }
    if (failed) {
      return <p>Kullanıcı bilgisi getirilirken bir problem oluştu.</p>;
    }
    if (user) {
      return <Profile user={user} />;
    }
  };

  return <>{renderProfile()}</>;
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  user: state.user.user,
  failed: state.user.failed,
});

export default connect(mapStateToProps)(ProfileDetail);
