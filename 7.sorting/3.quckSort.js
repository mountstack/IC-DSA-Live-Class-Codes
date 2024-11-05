
let arr = [5, 3, 1, 7, 0, -3, 9, 7, 2, 2, 10];


function partition(arr, left, right) { 
    // 1st value is the pivot 
    const pivot = arr[left]; 

    // Count the number of smaller values then pivot 
    let count = 0; 
    for(let i = left+1; i <= right; i++) {
        if(arr[i] <= pivot) {
            count++; 
        }
    } 

    count += left; 
    
    // Move pivot to its correct position 
    // swap 
    let temp = arr[left]; 
    arr[left] = arr[count]; 
    arr[count] = temp; 


    // smalll <= pivot < large

    let i = left, j = right;
    while(i < count && j > count) { 
        while(arr[i] < pivot) { 
            i++; 
        } 
        while(arr[j] > pivot) { 
            j--; 
        } 

        if(i < count && j > count) { 
            // swap 
            let temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 

            i++; 
            j--; 
        } 
    } 


    return count; 
}

function quickSort(arr, left, right) { 
    if(left < right) { 
        const p = partition(arr, left, right); 
        
        quickSort(arr, left, p-1); // left 
        quickSort(arr, p+1, right); // right 
    } 
} 

arr; 

quickSort(arr, 0, arr.length-1); 

arr; 
