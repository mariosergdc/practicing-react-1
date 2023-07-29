const LeetCode = () => {
  const palindrome = (num) => {
    let str = num.toString();
    if (str[0] === "-") {
      return false;
    }
    let length = str.length;
    console.log(length);

    let cociente = Math.floor(length / 2);
    console.log(cociente);
    for (let i = 0; i < cociente; i++) {
      if (str[i] !== str[length - 1 - i]) return false;
    }
    return true;
  };
  console.log(palindrome(112211));

  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void} Do not return anything, modify nums1 in-place instead.
   */
  var compareNumbers = function (a, b) {
    if (a < 0 && b < 0) {
      return a - b;
    } else if (a < 0) {
      return -1;
    } else if (b < 0) {
      return 1;
    } else {
      return a - b;
    }
  };

  var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2.slice(0, n));
    nums1.sort(compareNumbers);
    console.log(nums1);
  };

  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

  var largestLocal = function (grid) {
    let newMat = new Array(grid.length - 2);
    for (let i = 0; i < grid.length - 2; i++) {
      newMat[i] = new Array(grid.length - 2);
      for (let j = 0; j < grid.length - 2; j++) {
        newMat[i][j] = Math.max(
          grid[i][j],
          grid[i][j + 1],
          grid[i][j + 2],
          grid[i + 1][j],
          grid[i + 1][j + 2],
          grid[i + 2][j],
          grid[i + 2][j + 1],
          grid[i + 2][j + 2]
        );
      }
    }
    return newMat;
  };

  console.log(
    largestLocal([
      [9, 9, 8, 1],
      [5, 6, 2, 6],
      [8, 2, 6, 4],
      [6, 2, 2, 2],
    ])
  );
  return <div>LeetCode</div>;
};

export default LeetCode;
