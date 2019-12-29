function greet(firstName="Imtiaz"){
    //console.log("Hello");
    return "hello " + firstName;
}

//console.log(greet("Akil"));


// function expression

const square = function(x=5){
    return x*x;
};

//console.log(square(7));


//immediate invokable function expression IIFE

(function(x,y){
    console.log(x+y);
})(5,6);