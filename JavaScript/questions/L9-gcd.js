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
  if (arr.length < 2) {
    return;
  }

  bruteForce(arr);
  let gcd = euclideanMethod(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    gcd = euclideanMethod(gcd, arr[i]);
  }
  console.log("Euclidean Method :: ", gcd);
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

function euclideanMethod(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  if (max % min === 0) {
    return min;
  }
  return euclideanMethod(min, max % min);
}

gcd();
