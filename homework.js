// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(items, removeItems) {
    let array = []
    for (let name of items) {
        if (name !== removeItems) {
            array.push(name)
        }
    }
    return array
}



// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.


function remove(items, removeItems) {
    let array = []
    for (let name of items) {
        if (name !== removeItems) {
            array.push(name)
        }
    }
    return array
}

// note - function is same as problem 1, solved to return new array and tested in Mocha Tests - CJ







// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(arrayNumbers) {
    let num = 0
    for (let check of arrayNumbers) {
        num += check
    }
    return num
}



// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(arrayNumbers) {
    let avg = 0
    if (arrayNumbers.length === 0) {
        return undefined
    } else {
        for (let check of arrayNumbers) {
            avg += check
        }
        return avg /= arrayNumbers.length
    }
}




// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(array) {
    let low = array[0]
        for (let check of array) {
            if (low > check) {
                low = check
            }
        }
        return low
}

// note - I know we practiced this in class and want to make an array of number examples. Could use another demo.
// I played around with naming variables (array, check, arrayItems, arrayNumbers) to see what I could use as my own reference.
// Had to google this one and try some different ways. 





// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// function selectionSort(x) {
    // var arrayCopy = array.slice(0);
    //making a note here, want to go over in class. 


// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

// function textList(x) [
    // I feel I could find out how to do this one when reviewing the demos we did in the PM zoom.

