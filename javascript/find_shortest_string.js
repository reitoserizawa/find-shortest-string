function findShortestString(arr) {
  // type your code here
  /* Given an Array of strings, return the shortest string. 
  If there is more than one string of that length, return the string that comes first in the list. 
  The Array will have a minimum length of 1. */

  // take out each element 
  for (i=0; i < arr.length; i++) {
    // lets say shortest length is i one
    let shortWord = arr[i].length
    // go to the next string
    for (j=i+1; j<arr.length; j++) {
      if (shortWord > arr[j].length) {
        return arr[j]
      } else {
        return arr[i]
      }
    }
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
