#!/usr/bin/env node
import axios from "axios";
import "dotenv/config";
import { createSpinner } from "nanospinner";

const fetchJoke = async () => {
  const spinner = createSpinner("Getting joke").start();
  try {
    const {data} = await axios.get("https://api.api-ninjas.com/v1/jokes", {
      headers: {
        "X-Api-Key": process.env.API_KEY
      },
    });
    
    const joke = data[0].joke;
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
