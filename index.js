/* QuickSort
Write a function qSort that sorts a dataset using the 
quicksort algorithm. The dataset to to sort is 
89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 
32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 
73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 
70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 
13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 
83 6 39 42 51 54 84 34 53 78 40 14 5 */

'use strict';

const data =
    '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

const arr = data.split(' ').map(element => Number(element));

function qSort(array, start = 0, end = array.length) {
    // if array is empty, return it
    if (start >= end) {
        return array;
    }
    // start = start;
    // end = end;

    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}

// partition function (array, start, end)
// loops through the array and swaps items after comparing to the pivot
function partition(array, start, end) {
    let j = start;
    // set pivot to the last item in the array
    let pivot = array[end - 1];
    // loop through arr swapping i and j if arr[i] is smaller than the pivot
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    // put the pivot in the correct spot
    swap(arr, end - 1, j);
    return j;
}

// swap function (array, item, item)
// swaps two items
function swap(arr, i, j) {
    let tmp = arr[j]; // 2
    arr[j] = arr[i]; // 2 = 3
    arr[i] = tmp; // 3 = 2
    return arr;
}
let counter = 0;
function mSort(array) {
    // we're going to recursively call mSort to split the array
    // if the array is length 1 or less it is already sorted
    // so just return it
    if (array.length <= 1) {
        return array;
    }
    counter++;
    console.log(counter);
    // split the array into two halves
    // then call mSort on those halves

    const middle = Math.floor(array.length / 2);
    // slices to middle but does not include it
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    let result = merge(left, right, array);
    return `The array took ${counter} operations to sort`;
}

let mergeCount = 0;
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    // if we get here, we are eventually going to have
    // two arrays of one item each. We set left and right index to 0
    // then compare the left item to the right item.
    // Then array[outputIndex] becomes the smaller of the two,
    // outputIndex is incremented.
    while (leftIndex < left.length && rightIndex < right.length) {
        mergeCount++;
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    // only one of these two will run
    // the smaller of the left and right was already assigned
    // now we just assign array[outputIndex] to the value of the bigger
    // of the two values
    for (let i = leftIndex; i < left.length; i++) {
        mergeCount++;
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        mergeCount++;
        array[outputIndex++] = right[i];
    }

    // then we return this array to the recursive call;
    return array;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// console.log(mSort(arr));
console.log(counter, mergeCount);
