/**
 * Find GCD of n given numbers
 *
 */

import { getUserInput } from "../JsUtility/index.js";

async function gcd() {
  const arraySize = await getUserInput("Enter array size : ");
  const arr = new Array(arraySize);
  for (let i = 0; i < arraySize; i++) {
    const userInput = await getUserInput("Enter the value : ");
    arr[i] = userInput;
  }
  bruteForce(arr);
}

function bruteForce(arr) {
  let min = Infinity;
  arr.forEach((element) => {
    min = Math.min(element, min);
  });
  let greatestDivisor = null;
  for (let i = min; i >= 1; i--) {
    let dividesAll = true;
    arr.forEach((element) => {
      if (element % i !== 0) {
        dividesAll = false;
      }
    });
    if (dividesAll) {
      greatestDivisor = i;
      break;
    }
  }
  console.log("BRUTE_FORCE", greatestDivisor);
}

gcd();
