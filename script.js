// l; // Formator

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(2001));

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -1, 'error', 55, 76, 91, 23, 1, -9];

// 1) Understand the problem.
// - What is the temp amptitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperature?
// -What's a sensor error? And what to do? When it occurs.

// 2) Breaking up into sub-problems.
// - How to ignore errors?
// - Find max value in temp array.
// - Find min vlaue in temp array.
// - Subtract min from max (amplitude) and return it.

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
// };

// calcTempAmplitude([3, 5, 11, 2, -1, 66]);

// let myArray = [100, 80, 22, 1, 555];
// console.log(myArray[1]);

// myArray.push(30);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(400); // unshift will add the element in the stating in a array.
// console.log(myArray);

// myArray.shift(); // shift will remove the add element at the first.
// console.log(myArray);

let names = ['Amal', 'Dhanvan', 'Akash', 'Akansha', 'Amit', 'Akash'];
// indexOf
names.indexOf('Akash');
console.log(names.indexOf('Akash', 3));

//lastIndexOf
names.lastIndexOf('Akash');
console.log(names.lastIndexOf('Akash'));

// includes
names.includes('Akansha'); // The includes are used for only the primitive data types.
console.log(names.includes('Akansha'));

// For the non-primitive data types we can use the  (find method).

// names.includes('Akansha');

// let channels = [
//   {
//     name: 'Apna college',
//     subscriber: 10000,
//   },
//   {
//     name: 'Apni kaksha',
//     subscriber: 20000,
//   },
//   {
//     name: 'day bus',
//     subscriber: 30000,
//   },
// ];

// console.log(channels.find(element => element.name === 'Apna college'));

// let array1 = ['vijay', 'singh', 'baby'];
// let array2 = ['school', 'shakya', 'singh'];

// array3 = array1.concat(array2); // Concat are used to add the two array.
// console.log(array3);

//It is also used to add the element of array.
// let array3 = [...array1, ...array2];
// console.log(array3);

// SLICE are uesd to delet the element
//let body = ['eye', 'nose', 'tiiii', 'jfhghdhd'];
//console.log(body.slice(1, 3)); // (First one is the stating element, And this is the last element which i wanted to deletd it)

// //JOIN
// let student = ['S', 'H', 'I', 'V', 'A'];
// student = student.join('-');
// console.log(student);

// // SPLIT
// console.log(student.split());

// QUESTIONS OF ARRAY

const characters = [
  {
    name: 'Tarak Mehta',
    height: '172',
    mass: '77',
    eye_color: 'brown',
    gender: 'male',
  },
  {
    name: 'Jethalal',
    height: '145',
    mass: '136',
    eye_color: 'black',
    gender: 'male',
  },
  {
    name: 'Babita Ji',
    height: '158',
    mass: '49',
    eye_color: 'grew',
    gender: 'female',
  },
  {
    name: 'Krishnan Iyer',
    height: '168',
    mass: '84',
    eye_color: 'black',
    gender: 'male',
  },
];

// 1) Get an array of all names.
const name = characters.map(ch => ch.name);
console.log(name);

// 2) Get an array of object with just name and height properties.
const propertiesOfCh = characters.map(ch => {
  return {
    name: ch.name,
    height: ch.height,
  };
});
console.log(propertiesOfCh);

// 3) Get the total height of all characters.
const totalHeight = characters.reduce((prevHeight, character) => {
  return prevHeight + Number(character.height);
}, 0);
console.log(totalHeight);

// 3) Get characters with mass greater then 100.
const greaterThanMass = characters.filter(character => {
  return character.mass > 100;
});
console.log(greaterThanMass);

// 4) Get all male characters.
const maleCh = characters.filter(character => {
  return character.gender == 'male';
});
console.log(maleCh);

// 5) Sort by name.
const sortByName = characters.sort((character1, character2) => {
  if (character1.name < character2.name) {
    return -1;
  }
  if (character1.name > character2.name) {
    return 1;
  }
  return 0;
});
console.log(sortByName);

// 6) Sorrt by gender.

const sortByGender = characters.sort((character1, character2) => {
  if (character1.gender > character2.gender) {
    return -1;
  }
  if (character1.gender < character2.gender) {
    return 1;
  }
  return 0;
});
console.log(sortByGender);

// 7) Does every character have mass more than 40?   IS A BOOLEAN FUNCTION.
console.log(
  characters.every(character => {
    return character.mass > 40;
  })
);

// 8) Does every character have blue eyes?
console.log(
  characters.every(character => {
    return character.eye_color == 'blue';
  })
);

// 9) Is there at least one male character?  THAN WE CAN USE THE SOME
console.log(characters.some(character => character.gender == 'male'));

// 10) is there at least one character taller than 200?
console.log(characters.some(character => character.height > 200));
