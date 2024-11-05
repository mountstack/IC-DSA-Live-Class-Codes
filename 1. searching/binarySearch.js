

const target = 30;
const arr = [10, 10, 10, 30, 30, 30, 40, 40, 50, 50, 70, 70, 100, 100]; 
let result; 

function binarySearch() {
    let left = 0; 
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2); 

        if(target === arr[mid]) { 
            result = mid; 
            // right = mid - 1; // first occurance
            left = mid + 1 // last occurance
        } 
        else if(arr[mid] < target) { 
            left = mid + 1; 
        } 
        else {
            right = mid - 1;
        }
    }

    return result; 
}


console.log(binarySearch());



function ceilingBinarySearch() {
    let left = 0; 
    let right = arr.length - 1;
    let mid; 

    while(left <= right) {
        mid = Math.floor((left + right) / 2); 
        
        if(arr[mid] < target) { 
            left = mid + 1; 
        } 
        else {
            right = mid - 1;
        }
    }

    return mid + 1; 
}






function orderAgnosticBinarySearch() {
    const isAsc = arr[0] < arr[arr.length-1];

    let left = 0; 
    let right = arr.length - 1;

    while(true) {
        let mid = Math.floor((left + right) / 2); // 4 

        if(target === arr[mid]) { 
            return `${target} found at index ${mid}`;
        } 
        else if(arr[mid] < target) { 
            if(isAsc) { 
                left = mid + 1;
                if(left > right) { 
                    return 'Data not found';
                } 
            } 
            else {
                right = mid - 1;
            }
        } 
        else {
            if(isAsc) {
                right = mid - 1;
            } 
            else {
                left = mid + 1;
                if(left > right) { 
                    return 'Data not found';
                }
            }
        }
    }
}
