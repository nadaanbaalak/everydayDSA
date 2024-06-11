/* 
    given an array of size N, and elements are permutation of numbers from 0 to N-1
    Now we need to divide the array into chunks and sort the array, then concatinate the array such 
    that resulting array is sorted. 
*/
function maxChunks(inputArray) {
  if (!Array.isArray(inputArray)) {
    return -1;
  }
  let maxTillNow = -1;
  let chunks = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (maxTillNow < inputArray[i]) {
      maxTillNow = inputArray[i];
    }
    if (maxTillNow === i) {
      chunks++;
    }
  }
  return chunks;
}
