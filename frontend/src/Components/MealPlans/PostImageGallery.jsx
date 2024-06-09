import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./PostImageGallery.css";

// const images = [
//   {
//     original:
//       "https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?cs=srgb&dl=pexels-achraf-alan-3139497.jpg&fm=jpg",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

const PostImageGallery = ({ images }) => {
  const imageList = images.map((image) => ({
    original: `http://localhost:9191/image/fileSystem/${image}`,
    thumbnail: `http://localhost:9191/image/fileSystem/${image}`,
  }));

  return (
    <div className="">
      <ImageGallery
        showPlayButton={false}
        showThumbnails={false}
        items={imageList}
      />
    </div>
  );
};

export default PostImageGallery;
