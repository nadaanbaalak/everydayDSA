import * as rl from "readline";

export const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function askQuestion(prompt, inputType) {
  return await new Promise((resolve, reject) => {
    readline.question(prompt, (n) => {
      if (inputType === "number") {
        resolve(parseInt(n));
      } else {
        resolve(n);
      }
    });
  });
}
