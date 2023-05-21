//operator = '+-*/'
function calculator(num1,num2,operator){
    if(operator == '+'){
        return add(num1,num2)
    }
    else if(operator == '-'){
        // console.log("sub")
       return sub(num1,num2);
    }
    else if(operator == '*'){
       return multi(num1,num2)
        //console.log("multi")
    }
    else if(operator == '/'){
        // console.log("div")
        return div(num1,num2)
    }
    
}
function add(num1, num2){
    return num1+num2;
}

function sub(num1, num2){
    return num1-num2;
}

function multi(num1, num2){
    return num1*num2;
}

function div(num1, num2){
    return num1/num2;
}

function mod(num1, num2){
    return num1%num2;
}
// var a = add(3,4)


// var a = calculator(5,15,'+');
// console.log(a)

// var b = calculator(a,5,'-');
// console.log(b)

// var c = calculator(b,12,'*')
// console.log(c)

// var a = calculator{
//     (('+')'-')'*'}

//     var b = a(3,4)



console.log(calculator(calculator(calculator(5,15,'+'),5,'-'),12,'*'))
