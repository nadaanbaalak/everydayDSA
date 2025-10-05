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
  efficientSolution(arr);
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

function efficientSolution(arr) {
  const arraysize = arr.length;
  let nextIndex = null;

  for (let i = 0; i < arraysize; i++) {
    if (arr[i] < 0) {
      continue;
    }
    nextIndex = arr[i];
    let val = (i + 1) * -1;
    // loop till we are back at the current index (that will also mean cycle is complete)
    while (nextIndex !== i) {
      let temp = arr[nextIndex]; // what the next index would be
      arr[nextIndex] = val;
      val = (nextIndex + 1) * -1;
      nextIndex = temp;
    }
    arr[nextIndex] = val;
  }
  for (let i = 0; i < arraysize; i++) {
    arr[i] = arr[i] * -1 - 1;
  }

  console.log("Transformed :: ", arr);
}
