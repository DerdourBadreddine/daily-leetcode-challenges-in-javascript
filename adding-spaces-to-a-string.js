/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let result = ""; // Initialize the result string
  let spaceIndex = 0; // Pointer to track the current position in the spaces array

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If current position matches the index in spaces array, add a space
    if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
      result += " ";
      spaceIndex++;
    }
    // Add the current character to the result string
    result += s[i];
  }

  return result; // Return the modified string
};

// Example usage:
const s1 = "LeetcodeHelpsMeLearn";
const spaces1 = [8, 13, 15];
console.log(addSpaces(s1, spaces1)); // Output: "Leetcode Helps Me Learn"

const s2 = "icodeinpython";
const spaces2 = [1, 5, 7, 9];
console.log(addSpaces(s2, spaces2)); // Output: "i code in py thon"

const s3 = "spacing";
const spaces3 = [0, 1, 2, 3, 4, 5, 6];
console.log(addSpaces(s3, spaces3)); // Output: " s p a c i n g"
