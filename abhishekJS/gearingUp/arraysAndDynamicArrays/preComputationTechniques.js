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
