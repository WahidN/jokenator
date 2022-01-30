#!/usr/bin/env node
import axios from "axios";
import { createSpinner } from "nanospinner";

const fetchJoke = async () => {
  const spinner = createSpinner("Getting joke").start();
  try {
    const response = await axios.get(
      "https://emojihub.herokuapp.com/api/random"
    );
    spinner.success({ text: response });
  } catch (error) {
    console.log(error);
    spinner.error({
      text: "Something went wrong. This is not a joke! Please try again later or contact de joke dev that made this stupid shit.",
    });
    process.exit(1)
  }
};

await fetchJoke();
