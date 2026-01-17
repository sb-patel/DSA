// 1. Second largest number
function secondLargest(arr) {
    if (arr.length < 2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

// Example
console.log(secondLargest([10, 5, 20, 8, 18, 10, 20])); // 18


// 2. Rotate array to the right by k steps
function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n; // handle k > n

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Example
console.log(rotateArray([1,2,3,4,5,6,7], 2));

// 3. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
    if(nums.length === 0) {
        return 0;
    }

    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}

const data = [1,1,2,2,3,4,4];
const count = removeDuplicates(data);

console.log(data);
console.log(count);