/*
int arr[n], int p, int q, int r
maximize the expression: (p * arr[i]) + (q * arr[j]) + (r * arr[k])
constraint: i < j < k 
*/

import { askQuestion } from "../../utils/io";

let n, p, q, r;

n = await askQuestion("Enter the value of array size : ", "number");
p = await askQuestion("enter the value of p : ", "number");
q = await askQuestion("enter the value of q : ", "number");
r = await askQuestion("enter the value of r : ", "number");

const inputArray = [];

for (let i = 0; i < n; i++) {
  inputArray[i] = await askQuestion(
    `Enter the element at index ${i}`,
    "number"
  );
}

let prefixMaxArray = [];
prefixMaxArray[0] = inputArray[0];

for (let i = 1; i < n; i++) {
  prefixMaxArray[i] = Math.max(prefixMaxArray[i - 1], inputArray[i]);
}

prefixMaxArray = Array.from(prefixMaxArray, (x) => x * p);

const suffixMaxArray = [].fill(0, 0, n - 1);
suffixMaxArray[n - 1] = inputArray[n - 1];

for (let i = n - 2; i >= 0; i--) {
  suffixMaxArray[i] = Math.max(suffixMaxArray[i + 1], inputArray[i]);
}

suffixMaxArray = Array.from(suffixMaxArray, (x) => x * r);

let a = 0,
  b = 1,
  c = 2;
let maximumSum = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < n - 1; i++) {
  let currentMax =
    prefixMaxArray[i - 1] + inputArray[i] * q + suffixMaxArray[i + 1];
  if (currentMax > maximumSum) {
    maximumSum = currentMax;
    a = i - 1;
    b = i;
    c = i + 1;
  }
}

console.log(maximumSum, a, b, c);
