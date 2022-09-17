for (let i = 1; i <= n; i++){
    if(i % 3 ==0 && i % 5 ==0 ){
        return ("fizzBuzz");
    }else if(i % 3 ==0){
        return ("Fizz");
    }else if(i % 5 ==0){
        return ("Buzz");
    }else if((i != i % 3 ==0) && i != (i % 5 ==0) ){
        return i;
    }
}