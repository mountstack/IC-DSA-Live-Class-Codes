

const arr = [10, 25, 13, 17, 26, 37, 75, 69];
const target = 37;

function linearSearch() {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            console.log('Data found at ' + i);
            return;
        }
    }

    console.log('Not Found');
}

linearSearch(); 
