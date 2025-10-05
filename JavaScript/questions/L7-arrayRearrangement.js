/**
 * Given an array of size N and it only contains distinct elements from 0 to N-1, transform the
 * array such that if arr[i] = j, then arr[j] = i
 */

import { getUserInput } from "../JsUtility/index.js";

async function rearrangeArray() {
  const arraySize = await getUserInput("Enter the size of array : ");
  const arr = new Array(arraySize).fill(0);

  for (let i = 0; i < arraySize; i++) {
    const userInput = await getUserInput("Enter the array value : ");
    arr[i] = userInput;
  }
  bruteForce(arr);
}

rearrangeArray();

// not exactly brute force but space time complexity is O(N)
function bruteForce(arr) {
  const tempArray = Array.from({ length: arr.length });
  for (let i = 0; i < arr.length; i++) {
    tempArray[arr[i]] = i;
  }
  console.log("BRUTE_FORCE", { tempArray, original: arr });
}
