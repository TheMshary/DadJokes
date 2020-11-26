import React from "react";
import NewJokeButton from "./buttons/NewJokeButton";
import jokeStore from "../stores/jokeStore";
import { observer } from "mobx-react";

const Joke = () => {
  return (
    <div>
      <p>{jokeStore.joke}</p>
      <NewJokeButton />
    </div>
  );
};

export default observer(Joke);
