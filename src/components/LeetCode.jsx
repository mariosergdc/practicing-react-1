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
  console.log(palindrome(12121));
  return <div>LeetCode</div>;
};

export default LeetCode;
