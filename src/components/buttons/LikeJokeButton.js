import React from "react";
import jokeStore from "../../stores/jokeStore";

const LikeJokeButton = () => {
  return <button onClick={jokeStore.likeJoke}>👍</button>;
};

export default LikeJokeButton;
