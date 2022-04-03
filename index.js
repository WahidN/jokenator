#!/usr/bin/env node
import axios from "axios";
import { createSpinner } from "nanospinner";

const fetchJoke = async () => {
  const spinner = createSpinner("Getting joke").start();
  try {
    const {data} = await axios.get(
      "http://jokes.guyliangilsing.me/retrieveJokes.php?type=random"
    );
    const joke = data.joke;
    spinner.success({ text: joke });
  } catch (error) {
    console.log(error);
    spinner.error({
      text: "Something went wrong. This is not a joke! Please try again later or contact de joke dev that made this stupid shit.",
    });
    process.exit(1)
  }
};

await fetchJoke();
