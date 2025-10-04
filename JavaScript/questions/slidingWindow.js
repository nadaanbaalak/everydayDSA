/**
 * Sum of every k-sized subarray
 */

import { getUserInput } from "../JsUtility/index.js";

async function subArraySum() {
  const k = await getUserInput("Enter the array size ");
  const arr = new Array(k).fill(0);
  console.log("After creating the array : ", arr);
  for (let i = 0; i < k; i++) {
    const userInput = await getUserInput("Enter the array value ");
    arr[i] = userInput;
  }
  console.log("State of arrya after user input : ", arr);
  const subArraySize = await getUserInput("Enter the size of sub array : ");
  bruteForce(arr, subArraySize);
  slidingWindowApproach(arr, subArraySize);
}

subArraySum();

// N^2
function bruteForce(arr, subArraySize) {
  let maxSum = -Infinity;
  let totalSum = 0;
  for (let i = 0; i <= arr.length - subArraySize; i++) {
    let sum = 0;
    for (let j = i; j < subArraySize + i; j++) {
      sum += arr[j];
    }
    totalSum += sum;
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  console.log("BRUTE_FORCE ::", { maxSum, totalSum });
}

function slidingWindowApproach(arr, subArraySize) {
  let maxSum = -Infinity;
  let sum = 0;
  // if the size of sub array is greater than the given array
  if (arr.length < subArraySize) {
    return -1;
  }
  for (let i = 0; i < subArraySize; i++) {
    sum += arr[i];
  }
  if (maxSum < sum) {
    maxSum = sum;
  }
  let totalSum = sum;
  for (let i = subArraySize; i < arr.length; i++) {
    let newSum = sum - arr[i - subArraySize] + arr[i];
    sum = newSum;
    console.log("SUM BEING ADDED", { newSum, sum });
    totalSum += newSum;
    if (maxSum < newSum) {
      maxSum = newSum;
    }
  }

  console.log("SLIDING_WINDOW", { maxSum, totalSum });
}
