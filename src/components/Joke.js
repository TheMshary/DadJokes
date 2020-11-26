import React from "react";
import NewJokeButton from "./buttons/NewJokeButton";
import LikeJokeButton from "./buttons/LikeJokeButton";
import jokeStore from "../stores/jokeStore";
import { observer } from "mobx-react";

const Joke = () => {
  return (
    <div>
      <p>{jokeStore.joke}</p>
      <NewJokeButton />
      <LikeJokeButton />
    </div>
  );
};

export default observer(Joke);
