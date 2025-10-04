import * as readline from "readline";

/**
 * Function to take user input from terminal
 * @param {string} question - The prompt to display
 * @returns {Promise<string>} - The user's input
 */
export function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
