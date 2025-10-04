/**
 * count the min number of swaps required to bring together all elements smaller or equal
 * to k in an array
 */

import { getUserInput } from "../JsUtility/index.js";

async function minSwapsRequired() {
  const arraySize = await getUserInput("Enter the size of array : ");
  const arr = Array.from({ length: arraySize });
  for (let i = 0; i < arraySize; i++) {
    const userInput = await getUserInput("Enter the value : ");
    arr[i] = userInput;
  }
  const k = await getUserInput("Enter the value of K : ");
  bruteForce(arr, k);
  slidingWindow(arr, k);
}

minSwapsRequired();

function bruteForce(arr, k) {
  let validElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      validElements++;
    }
  }
  // no element is smaller or equal to k
  // OR every element is smaller, then there will be only a single subArray
  if (validElements === 0 || validElements === arr.length) {
    return;
  }
  let minSwaps = Infinity;
  for (let i = 0; i <= arr.length - validElements; i++) {
    let badElements = 0;
    for (let j = i; j < i + validElements; j++) {
      if (arr[j] > k) {
        badElements++;
      }
    }
    minSwaps = Math.min(badElements, minSwaps);
  }

  console.log(minSwaps);
}

function slidingWindow(arr, k) {
  let validElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      validElements++;
    }
  }
  // no element is smaller or equal to k
  // OR every element is smaller, then there will be only a single subArray
  if (validElements === 0 || validElements === arr.length) {
    return;
  }
  let minSwaps = Infinity;
  let bad = 0;
  for (let i = 0; i < validElements; i++) {
    if (arr[i] > k) {
      bad++;
    }
  }
  if (minSwaps > bad) {
    minSwaps = bad;
  }
  for (let i = 0, j = validElements; j < arr.length; i++, j++) {
    // outgoing element arr[i]
    if (arr[i] >= k) {
      bad--;
    }
    if (arr[j] >= k) {
      bad++;
    }
    minSwaps = Math.min(minSwaps, bad);
  }

  console.log("Minimum swaps required : ", minSwaps);
}
