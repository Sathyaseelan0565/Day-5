// a) Print odd numbers in an array
//  anonymous function;

  let odd = function (array) {
    for (var i = 0; i < array.length; i++) {
        if(array[i] % 2 === 1){
            console.log(array[i])
        }
    }
 }
odd([23, 36, 47, 45, 64, 85, 24]);

//  IIFE function;

    (function(array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] % 2 !== 0){
                console.log(array[i])
            }
        }
    })([22, 13, 36, 56, 67, 42, 65]);

// Arrow Function;

let odds = (array) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 1)
            console.log(array[i]);
            }
    }
    odds([1, 2, 3, 4, 5, 6, 7, 8]);

// b) Convert all the strings to title caps in a string array
//  anonymous function;

    let title = function (str) {
        var txt = str.toLowerCase().split(" ");
            for(var i = 0; i< txt.length; i++){
            txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
            }
            console.log(txt.join(" "));
            return txt;
        }
         title("i am sathyaseelan from coimbatore");

//  IIFE function;

    (function (str) {
         var txt = str.toLowerCase().split(" ");
            for(var i = 0; i< txt.length; i++){
            txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
            }
            console.log(txt.join(" "));
            return txt;
         })("i am sathyaseelan from coimbatore");

//  Arrow function;

    let title1 =  (str)  => {
        var txt = str.toLowerCase().split(" ");
            for(var i = 0; i< txt.length; i++){
            txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
            }
            console.log(txt.join(" "));
            return txt;
        }
        title1("i am sathyaseelan from coimbatore");

// c) Sum of all numbers in an array
//    Anonymous function;

    let total = function(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++){
            sum += num[i];
        }
        console.log(sum);        
        return sum;
    }
    total([10, 20, 30, 40, 50]);

//  IIFE Function;

    (function(num) {
        let sum = 0;
            for (let i = 0; i < num.length; i++){
            sum += num[i];
            }
        console.log(sum);        
        return sum;
    })([10, 20, 30, 40, 50]);
    
// Arrow Function;

    let total1 = (num) => {
        let sum = 0;
            for (let i = 0; i < num.length; i++){
            sum += num[i];
        }
        console.log(sum);        
        return sum;
    }
    total1([10, 20, 30, 40, 50]); 

// d) Return all the prime numbers in an array
//    Anonymous function;

    let primenum = function(array){
        array = array.filter((number) => {
            for(let i = 2; i <= Math.sqrt(number); i++){
                if(number % i !== 0) return false;
            } 
                return number > 1;
        })
        console.log(array);
    }
    primenum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    //  IIFE Function;

    (function(array){
        array = array.filter((number) => {
            for(let i = 2; i <= Math.sqrt(number); i++){
                if(number % i !== 0) return false;
            } 
                return number > 1;
        })
        console.log(array);
    }) ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // Arrow Function;

        let primenum1 = (array) => {
             array = array.filter((number) => {
                for(let i = 2; i <= Math.sqrt(number); i++){
                    if(number % i !== 0) return false;
                 } 
                    return number > 1;
                })
                console.log(array);
            }
             primenum1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// e) Return all the palindromes in an array

let palindromeArray = function (arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[arr.length - i - 1]){
          return false; 
        }
    }
    console.log(arr);
    return palindromeArray;
}
palindromeArray(["mom","cat", "madam", "dog", "noon"]);

// f) Return median of two sorted arrays of the same size.








// g) Remove duplicates from an array

//  Anonymous function;

let duplicate = function (array) {
    let num = [...new Set(array)];
    console.log(num);
}

duplicate([1, 1, 2, 3, 4, 4, 5]);

// IIFE Function;

(function (array) {
    let num = [...new Set(array)];
    console.log(num);
}) ([1, 2, 3, 4, 5]);

// h) Rotate an array by k times

// Anonymous Function;
// function Rotate(array, li, ri) {
//     while(li < ri) {
//         let temp = a[li];
//         a[li] = a[ri];
//         a[ri] = temp;

//         li++;
//         ri--;
//     }
// }

// let Rotate = function (array, k) {
//     k = k % arguments.length;
//     if(k < 0) {
//         k += arguments.length;
//     }
//     Rotate(a, 0, a.length - k -1);
//     Rotate(a, a.length - k, a.length -1);
//     Rotate(a, 0, a.length -1);

// }

// Rotate([1, 2, 3, 4, 5], 2);

