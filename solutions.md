## ALTERNATE SOLUTIONS

### Solution 1
```js
let globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line 
    return [].concat(arr.sort(function(a, b) {
        return a - b;
    });
    // Add your code above this line
}
nonMutatingSort(globalArray);
```

### Code Explanation
- Firstly concatenate the array taken in as a parameter to a new empty array.
- The Use the `sort()` method as seen in the last challenge and create a function to sort the new array in ascending order.

