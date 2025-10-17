// Example 1:

function greet(name) {
  return "Hello, " + name;
}

console.log("Example 1: ", greet("Erica"));

// Expected result:
// Should print "Hello, Erica"



// Example 2:

function calculateAvg(prices) {
  let total = 0;
  for (const price of prices) {
    total += price; // total = total + price; // 10, 30, 60
  }
  return total / prices.length;
}

console.log("Example 2: ", calculateAvg([10, 20, 30]));

// Expected result: 20



// Example 3:

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log("Example 3: ", countVowels("Hello"));

// Expected result:
// Actual result:


// Example 4:

function findIndex(arr, target) {
  let i = 0;
  const found =[];
  while (i < arr.length) {
    if (arr[i] === target) {
      found.push(i);
    }
    i++; //needed to increment counter; should have known this- maybe can compare
    //a while loop and a for loop on flash cards- cuz really need all of the for loop 
    //components, right?
  }
  return found;
}

const testThis = [2, 5, 9, 2, 10]
console.log("can you see me?")

//findIndex();
console.log(findIndex(testThis, 2));
console.log("Example 4: ", findIndex([2, 4, 6, 8], 6));

// Expected result: 2


// Example 5:

function doubleValues(numbers) {
  return numbers.map(num => num * 2);
}

console.log("Example 5: ", doubleValues([5]));//map is an array method, needed to 
//put value into an array

// Expected result:
