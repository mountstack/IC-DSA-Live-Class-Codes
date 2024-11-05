

const arr = [10, 5, 25, 12, 17, 21]; 
const newArr = []; 


function mergeSort(arr, left, right) {
    if(left < right) {
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid); // left 
        mergeSort(arr, mid+1, right); // right 

        mergeSubArr(arr, left, mid, right); // merge sub-arrays 
    }
} 


function mergeSubArr(arr, left, mid, right) {
    let i = left; 
    let j = mid+1;
    let k = i; 

    // Two pointer 
    while(i <= mid && j <= right) {
        if(arr[i] <= arr[j]) {
            newArr[k] = arr[i];
            i++;
        }
        else {
            newArr[k] = arr[j]; 
            j++; 
        }
        k++; 
    } 

    // copy rest values
    if(i <= mid) { 
        while(i <= mid) {
            newArr[k] = arr[i];
            i++;
            k++;
        }
    } 
    else {
        while(j <= right) {
            newArr[k] = arr[j];
            j++;
            k++;
        }
    } 

    // Copy newArr values to original arr 
    for(let z = left; z <= right; z++) {
        arr[z] = newArr[z];
    }
}

mergeSort(arr, 0, arr.length-1)

arr; 
