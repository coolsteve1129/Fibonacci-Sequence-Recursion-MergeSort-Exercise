//simple iteration of fibonacci
function fibonacci(count){
    let number1 = 0
    let number2 = 0
    for(let i = 0; i < count; i++){
        
        // returns 1
        if(i == 1){
            console.log(number2)
        }//returns everything after 0 and 1 in the fibonacci sequence
        else if(i > 1){
            //logic that alternates between number 1 and 2 so I don't have to have a 3rd variable
            if(number2 > number1){
            number1 = number1 + number2
            console.log(number1)
            }
            else{
                number2 = number1 + number2
                console.log(number2)
            }
         }//returns 0  
        else{
            console.log(0);
            number2++;
        }
                
    }
}

function fibRec(count) {
    //calls fibRec(count - 2) untill it gets to count == 2, 1 , or zero.
    //in most cases it will get to two then return [0,1]
    if (count === 0) {
      return [];
    } else if (count === 1) {
      return [0];
    } else if (count === 2) {
      return [0, 1];
    }
  
    //recursive of call starting at initial count number then subtracting incrementally,
    //usually 2 but 0 or 1 if it's too small
    // when it hits this number it will then return to the previous fibRec() calls
    //usually fibRec(3), then fibRec(4) and so on
    //count will start going back up because of this
    const sequence = fibRec(count - 1);
    sequence.push(sequence[count - 2] + sequence[count - 3]);
    return sequence;
  }
  

// Merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  //halved arrays will be put back into merge sort untill they are all 1 or less
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  //arrays well be put back together in sorted order
  return merge(sortedLeft, sortedRight);
}

// Merge function
function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  //checks to see if the left or right is bigger in the current iteration
  //if the left or right length of the array reaches it's length the while loop will break
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

//if there are any numbers left over after one of the arrays has reached it's length
//the remaining numbers in the array that didn't reach it's length will be added to the
//merged list. This should be the largest numbers
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

const array = [  87, 16, 61, 43, 88 ];

// Apply merge sort to the array
const sortedArray = mergeSort(array);

//uncomment to run
//console.log(sortedArray);
//consolelog(fibonacci(8))
//console.log(fibRec(8))
