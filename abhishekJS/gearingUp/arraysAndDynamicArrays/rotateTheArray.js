// given an array, rotate it clockwise by K places
const inputArray = [4, 6, 1, 9, 3, 0];

// approach 2

function rotateTheArrayByK(placesToRotateBy) {
  const inputArrayLength = inputArray.length;
  const newArray = [].fill(0, 0, inputArrayLength);
  for (let i = 0; i < inputArrayLength; i++) {
    newArray[(i + placesToRotateBy) % inputArrayLength] = inputArray[i];
  }
  return newArray;
}

console.log(rotateTheArrayByK(4));

// approach 3

function reverseTheArray(inputArray, startIndex, endIndex) {
  let startPointer = startIndex;
  let endPointer = endIndex;
  while (startPointer < endPointer) {
    let temp = inputArray[startPointer];
    inputArray[startPointer] = inputArray[endPointer];
    inputArray[endPointer] = temp;
    startPointer++;
    endPointer--;
  }
}

function rotateByK(k) {
  const inputArrayLength = inputArray.length;
  reverseTheArray(inputArray, 0, inputArrayLength - k - 1);
  reverseTheArray(inputArray, inputArrayLength - k, inputArrayLength - 1);
  reverseTheArray(inputArray, 0, inputArrayLength - 1);
}

rotateByK(4);
console.log("Approach 3 : ", inputArray);
/**
 * Approach 1: We know rotation by K place equal to K * rotation by 1 Place,
 * So naive approach would be to run a for loop k times, inside it another for loop which is
 * responsible for moving all the elements by 1 place.
 * Worst case time complexity would be (k%length of input array)* (length of array) ==> n^2
 *
 * Approach 2: We make use of a temp array, we know by rotating the array by K places means
 * we move the element at index i k places ahead. so element at 1 when rotated by 3 places moves to 4
 * given that the array length is atleast 5. else it moves to the start of the array which would be
 * obtained by adding the current index to k, then mod by array length
 *
 * Approach 3: We make use of slightly unknown relation between Reversal and rotation
 * [4, 6, 1, 9, 3, 0] ===>  Reversal        ==> [0, 3, 9, 1, 6, 4]
 * [4, 6, 1, 9, 3, 0] ===> rotating by 3(k) ==> [9, 3, 0, 4, 6, 1]. the last K elements moved to front
 * Now if you try to see the relation between the 2 results...what do you see?
 * let's observe the array of length 'K' and 'N-K', the rotated array is result of
 */
