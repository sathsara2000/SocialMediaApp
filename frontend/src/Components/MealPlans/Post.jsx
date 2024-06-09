import React from "react";
import { posts } from "../../constants/data";
import PostImageGallery from "./PostImageGallery";
import { formatDistanceToNow, parseISO } from "date-fns";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const Post = ({ post }) => {
  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:9000/post/${post.mealId}`);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const timeAgo = formatDistanceToNow(parseISO(post.time), { addSuffix: true });
  return (
    <div className="bg-white px-5 py-4 rounded-2xl drop-shadow gap-y-5">
      <div className="flex flex-col gap-y-3">
        {/* top */}
        <div className="flex gap-x-3">
          {/* image  */}
          <div>
            <img
              className="rounded-full w-10 h-10"
              src={posts[0].userImg}
              alt=""
            />
          </div>
          {/* owner details */}
          <div className="flex flex-col justify-center">
            <p className="font-medium">{post.userName}</p>
            <p className="text-xs text-gray-600">{timeAgo}</p>
          </div>
          {/* options */}
          <div className="flex flex-1 justify-end">
            <button
              className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-100"
              onClick={deletePost}
            >
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
        {/* middle */}
        <div className="w-full">
          {/* content */}
          <div>
            <p className="text-sm">{post.content}</p>
          </div>
          {/* images */}
          {post.images.length !== 0 ? (
            <>
              <hr className="my-3" />
              <PostImageGallery images={post.images} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Post;
