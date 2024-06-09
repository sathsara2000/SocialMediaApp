npimport React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9000/posts");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    console.log("posts: ", posts);
  }, [posts]);

  return (
    <div className="flex flex-col gap-y-4">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
