/**
 * Rotate an array by 'k' units
 */

/**
 * Given an array of size N, integers p,q,r. Maximize p * arr[i] + q * arr[j] + r * arr[k]
 * i < j < k
 */

import { getUserInput } from "../JsUtility/index.js";

async function rotateArray() {
  let arraySize = await getUserInput("Enter the array size : ");
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

  let k = await getUserInput("By how much do you want to rotate the array : ");

  rotateUsingTempArray(inputArray, Number(k));

  for (let i = 0; i < Number(k); i++) {
    rotateByOne(inputArray);
  }

  console.log("State of Array after rotation : ", inputArray);
}

function rotateByOne(arr) {
  let temp = null;
  if (!Array.isArray(arr)) {
    return -1;
  }
  const arrayLength = arr.length;
  temp = arr[arrayLength - 1];
  for (let i = arrayLength - 1; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
}

function rotateUsingTempArray(arr, k) {
  const arrayLength = arr.length;
  const tempArr = new Array(arrayLength - 1).fill(0);
  for (let i = 0; i < arrayLength; i++) {
    tempArr[(i + k) % arrayLength] = arr[i];
  }

  console.log("After Rotation : ", tempArr);
}

function reverseArray(arr, start, end) {
  const arrayLength = arr.length;
  const startIndex = start || 0;
  const endIndex = end || arrayLength - 1;
  for (let i = startIndex; i < endIndex; i++) {}
}

rotateArray();
