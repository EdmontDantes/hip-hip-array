// Challenge 0
//
// Write a Challenge Banner printing function THAT'S A LITTLE DIFFERENT THAN BEFORE. This one will print out not only "Challenge n", where n is the number passed into it, but will also print n "#" characters to the left and n "#" to the right of the "Challenge n" text. You should also include a space between the "#" characters and the text.
//
function ChallBanner (n) {
  let hashTagsSum = ''
  for (let i = n; i >= 1; i--) {
    hashTagsSum = hashTagsSum + '#';
  }
  console.log(hashTagsSum + 'Challenge ' + n + hashTagsSum);
}

// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
ChallBanner(1);

const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];
for (let i = 0; i < students.length; i++) {
  
  console.log(students[i]);

}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
ChallBanner(2);
const grades = [100, 80, 110, 75, 83, 64];
for (let i = grades.length - 1; i >= 0; i--) {
  console.log(grades[i]);
}

// Challenge 3
// Console.log out only the even numbers in the following array.
ChallBanner(3);
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for (let i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
ChallBanner(4);
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (let i = 0; i < mixedSignNumbers.length; i++) {
  if (Math.abs(mixedSignNumbers[i]) % 2 === 0) {
    console.log(mixedSignNumbers[i]);
  }
}

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, and then console.log out each value individually.
ChallBanner(5);
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.pop()
symmetricalCapitals.shift()
for (let i = 0; i < symmetricalCapitals.length; i++) {
  
  console.log(symmetricalCapitals[i]);

}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
ChallBanner(6);
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.push(14, 15);
fibonacciNumbers.unshift(0);
for (let i = 0; i < fibonacciNumbers.length; i++) {
  
  console.log(fibonacciNumbers[i]);

}
// Challenge 7
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
ChallBanner(7);

const newArray = ['one Thing', 'Two Thing', 'Three Thing', 'Four Thing', 'Five Thing'];
for (let i = 0; i < newArray.length; i++) {

console.log(newArray[i]);

}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using .push and/or .unshift, and then console.log out each value individually.
const newArrayTwo = [];


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally. THEN log out each value of the original array. Slice does NOT modify the original array.


// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. .splice WILL change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
