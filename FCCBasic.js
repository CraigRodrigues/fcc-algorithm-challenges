// Free Code Camp - Basic Algorithm Scripting

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Factorialize a Number
function factorialize(num) {
  return num <= 1 ? 1 : num * factorialize(num - 1);
}

// Check for Palindromes
function palindrome(str) {
  return str.replace(/[^a-z0-9]/gi, '').toLowerCase() === str.split('').reverse().join('').replace(/[^a-z0-9]/gi, '').toLowerCase();
}

// Find Longest Word in a String
function findLongestWord(str) {
  return str.split(' ').reduce(function (current, longest) {
    return current.length > longest.length ? current : longest;
  }, '').length;
}

// Title Case a Sentence
function titleCase(str) {
  // start fresh
  let result = str.toLowerCase();
  // match every space and the letter after it and make it uppercase
  result = result.replace(/\s./g , function(match) {
    return match.toUpperCase();
  });
  // the first letter must also be uppercase
  return result[0].toUpperCase() + result.slice(1);
}

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  return arr.map(function (innerArr) {
    return innerArr.reduce(function (a,b) {
      return a > b ? a : b;
    });
  });
}

//Confirm the Ending
function confirmEnding(str, target) {
  return str.substr(str.length - target.length, target.length) === target;
}

//Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

//Truncate a string
function truncateString(str, num) {
  if (num <= 3)
    return str.slice(0, num) + '...';
  else if (str.length > num)
    return str.slice(0, num - 3) + '...';
  else
    return str;
}

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let results = [], i = 0;
  while (i < arr.length) {
    results.push(arr.slice(i, i + size));
    i += size;
  }
  return results;
}

//Slasher Flick
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

//Mutations
function mutation(arr) {
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1)
      return false;
  }
  return true;
}

//Falsy Bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function (element) {
   return !!element;
  });
}

/*  Seek and Destroy
 *  Learned about includes() from this challenge although I didn't use it.
 */

// ES6 spread syntax
function destroyer(...arr) {
  let argArr = arr[0];
  let otherArgs = arr.slice(1);
        
  return argArr.filter(function(item) {
    return otherArgs.indexOf(item) === -1;
  });
}

// without ES6
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  
  return arr.filter(function(item) {
    return args.indexOf(item) === -1;
  });
}

//Where do I belong
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  
  let index = 0;

  for (index; index < arr.length; index++) {
    if (num <= arr[index]) {
      return index;
    }
  }
  
  return index;
}

function rot13(str) { // LBH QVQ VG! = YOU DID IT!
  return str.replace(/[A-Z]/g, function(letter) {
    return String.fromCharCode((letter.charCodeAt() - 65 + 13) % 26 + 65);
  });
}