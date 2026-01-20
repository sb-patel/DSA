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

// 4. Maximum Sum Subarray
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6


// 5. Two sum
function twoSum(nums, target) {
  const map = new Map(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(nums[i], i);
  }
}

console.log(twoSum([3,2,1,4], 6))

// 6. Container with most water

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Example
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49


// 7. Best Time to Buy and Sell Stock

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

// Example
console.log(maxProfit([7,1,5,3,6,4])); // 5
