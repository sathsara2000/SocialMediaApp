import React, { useState } from "react";
import { images, names } from "../../constants/data";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-white px-5 py-4 rounded-2xl drop-shadow">
        <div className="flex flex-row gap-x-3">
          {/* image */}
          <div>
            <img className="rounded-full w-10 h-10" src={images.user} alt="" />
          </div>
          <div
            className="flex items-center py-2 px-3 bg-gray-100 hover:bg-gray-200 active:bg-gray-100 rounded-full w-full"
            onClick={handleShowModal}
          >
            <p className="text-lg font-normal text-gray-600 select-none">
              What's on your mind, {names.user.split(" ")[0]}?
            </p>
          </div>
        </div>
        <hr className="my-3" />
        {/* buttons */}
        <div className="w-full flex flex-row">
          <div
            className="flex items-center gap-x-3 w-1/2 justify-center p-2 hover:bg-gray-100 active:bg-gray-100 rounded-xl select-none"
            onClick={handleShowModal}
          >
            <img className="w-8 h-8" src={images.photo} alt="" />
            <p className="font-medium text-gray-600">Photos</p>
          </div>
          <div className="flex items-center gap-x-3 w-1/2 justify-center p-2 hover:bg-gray-100 rounded-xl select-none">
            <img className="w-8 h-8" src={images.video} alt="" />
            <p className="font-medium text-gray-600">Videos</p>
          </div>
        </div>
      </div>
      <CreatePostModal
        showModal={showModal}
        setShowModal={setShowModal}
        userId={1}
        image={images.user}
        name={names.user}
      />
    </>
  );
};

export default CreatePost;
