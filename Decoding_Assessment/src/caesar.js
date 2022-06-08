// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    let result = "";
    if (!shift) return false;
    if (shift > 25 || shift === 0 || shift < -25) return false;
    for (let i = 0; i < input.length; i++) {
      let numberChange = input.charCodeAt(i);
      if (numberChange === 32) {
        numberChange = " ";
      }
      if (numberChange <= 96 || numberChange >= 123) {
        numberChange = input[i];
      } else {
        if (encode)
          numberChange += shift;
        if (!encode)
          numberChange -= shift;
        if (numberChange <= 96) numberChange += 26;
        if (numberChange >= 123) numberChange -= 26;
        numberChange = String.fromCharCode(numberChange);
      }
      result += numberChange;
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
