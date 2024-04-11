https://devtools.tech/questions/s/build-country-capital-game-or-microsoft-frontend-interview-question-or-javascript-or-react-js---qid---yPb5g7MLCSf6j2F3qjqj


## Learnings: 
### Shuffling an array:
1. Fisher-Yates Sorting Algorithm:
 This algorithm's basic premise is to iterate over the items, swapping each element in the array with a randomly selected element from the remaining un-shuffled portion of the array.


```
// declare the function 
const shuffle = (array: string[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
/*
 The syntax [array[i], array[j]] = [array[j], array[i]] is called an array destructuring assignment.
 It allows for the swapping of values between two variables or array elements without the need for a temporary variable.
*/
  } 
  return array; 
}; 
  
// Usage 
const myArray = ["apple", "banana", "cherry", "date", "elderberry"]; 
const shuffledArray = shuffle(myArray); 

console.log(shuffledArray);

```

2. Using the sort() Method with a Random Comparison Function
   ```
    const shuffle = (array: string[]) => { 
        return array.sort(() => Math.random() - 0.5); 
    }; 
    
    // Usage 
    const myArray = ["apple", "banana", "cherry", "date", "elderberry"]; 
    const shuffledArray = shuffle(myArray); 
    console.log(shuffledArray);
   ```
   ### Why do you subtract 0.5 from the result of Math.random()?
By subtracting 0.5 from the result of Math.random(), you introduce a random value between -0.5 and 0.5. This random value will cause the comparison function to return negative, positive, or zero values in a random manner for different pairs of elements. Consequently, the sort() method shuffles the array randomly.

https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/

3. Using lodash :  _ .shuffle(arrayinput)
   https://www.geeksforgeeks.org/lodash-_-shuffle-method/
