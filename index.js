function fibonacci(numero){
    const array = [1, 1];
    for(let i=2; i < numero; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

const numFibonacci = fibonacci(7);
console.log(numFibonacci);



