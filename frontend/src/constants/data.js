const userImg = require("../assets/profile_3.png");
const photoImg = require("../assets/photo.png");
const videoImg = require("../assets/video.png");

// post images
const horizontalPostImg1 = require("../assets/horizontal_post_img_1.jpg");
const horizontalPostImg2 = require("../assets/horizontal_post_img_2.jpg");
const horizontalPostImg3 = require("../assets/horizontal_post_img_3.jpg");
const verticalPostImg1 = require("../assets/vertical_post_img_1.jpg");

const images = {
  user: userImg,
  photo: photoImg,
  video: videoImg,
};

const names = {
  user: " Mason Parker",
};

const posts = [
  {
    postId: 1,
    type: "photo",
    time: "2h ago",
    userId: 1,
    userName: "Ava Kate",
    userImg: images.user,
    content:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
    images: [horizontalPostImg1, horizontalPostImg2, verticalPostImg1],
    likeCount: 0,
    commentCount: 0,
    comments: ["comment 1", "comment 2", "comment 3"],
  },
];

export { images, names, posts };
