import { makeAutoObservable } from "mobx";
import axios from "axios";

class JokeStore {
  joke = "";

  constructor() {
    makeAutoObservable(this);
  }

  newJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/slack");
      this.joke = response.data.attachments[0].text;
    } catch (error) {
      console.log(
        "🚀 ~ file: jokeStore.js ~ line 16 ~ JokeStore ~ newJoke= ~ error",
        error
      );
    }
  };

  likeJoke = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/jokes/like",
        this.joke
      );
      console.log(
        "🚀 ~ file: jokeStore.js ~ line 29 ~ JokeStore ~ likeJoke= ~ response",
        response
      );
    } catch (error) {
      console.error(
        "🚀 ~ file: jokeStore.js ~ line 28 ~ JokeStore ~ likeJoke= ~ error",
        error
      );
    }
  };
}

const jokeStore = new JokeStore();
jokeStore.newJoke();

export default jokeStore;
