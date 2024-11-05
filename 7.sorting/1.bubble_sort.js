

let arr = [3, 2, 0, 1, -2];


for(let m = 0; m < arr.length; m++) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) { 
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp; 
        }
    }
} 

arr; 