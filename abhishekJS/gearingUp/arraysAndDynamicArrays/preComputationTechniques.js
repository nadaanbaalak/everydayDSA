import { askQuestion } from "../../utils/io.js";

const arraySize = await askQuestion("Enter the array size : ", "number");

let inputArray = [];

for (let i = 0; i < arraySize; i++) {
  const inputElement = await askQuestion(
    `Enter the element at index ${i} `,
    "number"
  );
  inputArray[i] = inputElement;
}

let psArray = [inputArray[0]];
for (let i = 1; i < arraySize; i++) {
  psArray[i] = psArray[i - 1] + inputArray[i];
}

console.log(psArray);

let queries = await askQuestion("Enter the number of queries : ", "number");

let l, r;

for (let i = 0; i < queries; i++) {
  l = await askQuestion("enter the value of l : ", "number");
  r = await askQuestion("Enter the value of r : ", "number");

  console.log(
    `Sum of Elements between index ${l} and ${r} : `,
    l === 0 ? psArray[r] : psArray[r] - psArray[l - 1]
  );
}

/* 
 indices  0  1  2  3  4  5  6  7
 array = [0, 5, 2, 7, 9, 0, 1, 4]
 pmax =  [0, 5, 5, 7, 9, 9, 9, 9]
 max between 3,6 
 max between 0,3
 max between 2,7
 max between 1,3
 max between 5,7
 */
