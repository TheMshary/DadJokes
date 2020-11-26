import React from "react";
import jokeStore from "../../stores/jokeStore";

const NewJokeButton = () => {
  return <button onClick={jokeStore.newJoke}>New Joke</button>;
};

export default NewJokeButton;
