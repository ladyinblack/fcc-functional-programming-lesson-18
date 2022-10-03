// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Return a Sorted Array Without Changing the Original Array</h1>`;

/** TODO:
 * Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.  The function should return a new array, and not mutate the globalArray variable.
 * 
 const globalArray = [5, 6, 3, 2, 9];
 
 function nonMutatingSort(arr) {
   // Only change code below this line
 
   // Only change code above this line
 }
 
 nonMutatingSort(globalArray);
 */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const newArr = arr.slice();
  return newArr.sort((a, b) => {
    return a - b;
  });

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);
