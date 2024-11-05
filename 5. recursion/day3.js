

// 1. Print the value of an array

const arr = [10, 20, 30, 40, 50];

function print(arr, current, last) {
    if(current > last) return;

    console.log(arr[current]);
    
    print(arr, current+1, last); 
}


// print(arr, 0, 4); 



// 2. Sum of Array values


function sum(arr, current, last) {
    if(current > last) return 0;

    return arr[current] + sum(arr, current+1, last);
}


// console.log(sum(arr, 0, 4));





// 3. Reverse the array

function reverse(arr, i, j) {
    if(i > j) return; 

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    reverse(arr, i+1, j-1);
}


// reverse(arr, 0, 4); 

// console.log(arr);




// 4. Linear Search

// const target = 30; 

function linearSearch(arr, current, last, target) {
    if(current > last) return false;

    if(arr[current] === target) return true;

    return linearSearch(arr, current+1, last, target);
}


// console.log(linearSearch(arr, 0, 4, target) ? 'Data found' : 'Data not found');





// 5. Binary Search 

const target = 35; 

function binarySearch(arr, i, j, target) {
    if(i > j) return false;

    let mid = Math.floor((i + j) / 2);

    if(arr[mid] === target) return true;

    if(target < arr[mid]) {
        return binarySearch(arr, i, mid-1, target);
    }
    else {
        return binarySearch(arr, mid+1, j, target);
    } 
}


console.log(binarySearch(arr, 0, 4, target) ? 'Data found' : 'Data not found');



