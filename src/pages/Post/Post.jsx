import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Post = ({ user = null }) => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (user == null) {
  //     navigate("/login");
  //     alert("No access!");
  //   }
  // }, []);
  return <h1>{user?.displayName}</h1>;
};

export default Post;
