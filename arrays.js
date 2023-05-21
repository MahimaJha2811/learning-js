var arr = [2,3,4,5,6]
var num1 = 10

var sum = 0
for(let i = 0; i<arr.length  ; i++){
    sum = sum + arr[i]
    
}

function isPresent(arr, num){
    for (let i = 0; i < arr.length ; i++){
        //arr == num  

    if (arr[i] == num )
        return true    
    }
return false
}
console.log(isPresent(arr,num1))




// console.log(sum)