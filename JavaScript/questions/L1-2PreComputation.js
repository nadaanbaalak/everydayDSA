/**
 * Given an array of size N, integers p,q,r. Maximize p * arr[i] + q * arr[j] + r * arr[k]
 * i < j < k
 */

import { getUserInput } from "../JsUtility/index.js";

async function maximizeExpression() {
  const arraySize = await getUserInput("Enter the array size : ");
  if (arraySize.trim() === "") {
    console.error("Invalid user input for array size");
    return;
  }
  const inputArray = Array.from({ length: Number(arraySize) });
  for (let i = 0; i < Number(arraySize); i++) {
    let validInput = null;
    let userInput;
    while (validInput === null) {
      userInput = await getUserInput("Enter value in array : ");
      if (userInput.trim() === "") {
        console.error("Invalid input");
      } else {
        inputArray[i] = Number(userInput);
        validInput = Number(userInput);
      }
    }
  }
  const p = await getUserInput("Enter the value of P : ");
  const q = await getUserInput("Enter the value of Q : ");
  const r = await getUserInput("Enter the value of R : ");
  console.log({ arraySize, inputArray, p, q, r });
}

maximizeExpression();
