
// Intermediate Algorithms

// Sum all numbers in range
function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  
  let min = arr[0];
  let max = arr[1];
  
  // http://stackoverflow.com/questions/30386084/sum-all-numbers-between-two-integers
  return ((max - min + 1) * (max + min)) / 2;
}

// Diff two arrays
function diffArray(arr1, arr2) {
  
  // combine both into one big array and then compare that to the two original arrays.
  let bigArray = [...arr1, ...arr2];
  
  // if an element is included in both arrays filter it out.
  return bigArray.filter(function(item) {
    return !(arr1.includes(item) && arr2.includes(item));
  });
}

// Roman Numeral Converter
function convertToRoman(num) {
  let number = num;
  let result = '';
  let i = 0;
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  while (decimal[i]) {
    if (number >= decimal[i]) {
      result += roman[i];
      number -= decimal[i];  
    } else {
      i++;
    }
  }
  
  return result;
}

// Search and Replace
function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  
  return str.replace(before, after);
}

// Pig Latin
function translatePigLatin(str) {  
  let firstVowelIndex = str.search(/[aeiou]/g);
  
  return firstVowelIndex === 0 ? str + 'way' :  str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
}

// Missing Letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1))
      return String.fromCharCode(str.charCodeAt(i) + 1);
  }
  
  return undefined;
}

//Boo Who
function booWho(bool) {
  return typeof(bool) === boolean;
}

// Sorted Union
// Learned about set and flattening arrays with ES6 spread syntax
function uniteUnique(...arr) {
  let results = [];
  
  arr.forEach(function(item) {
    return item.forEach(function(item) {
      if (!results.includes(item))
        results.push(item);
    });
  });
  
  return results;
}

// Convert HTML Entities
function convertHTML(str) {
  return str.replace(/&+/g, '&amp;')
            .replace(/<+/g, '&lt;')
            .replace(/>+/g, '&gt;')
            .replace(/["]/g, '&quot;')
            .replace(/[']/g, '&apos;');
}