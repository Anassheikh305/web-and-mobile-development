

//---------------------------x----------------x--------------------------------


                                // QUESTION : 01    


// function reverseNumber()
// {
//     let rev = 0;
//     let num = 12345;
//     let lastdigit;

//     while(num != 0){
//         lastdigit = num % 10;
//         rev = rev * 10 + lastdigit;
//         num = Math.floor(num/10);
//     }
//     console.log("Reverse Number : " + rev);
// }

// reverseNumber();


//---------------------------x----------------x--------------------------------


                                // QUESTION : 02   


// function palindrome(string) {

//     var len = string.length;

//     for(let i= 0 ; i< len/2 ; i++)
//     {
//         if(string[i] !== string[len - 1 - i])
//         {
//             return 'its not palindrome';
//         }
//     }
//     return 'its palindrome'
// }

// var string = prompt("Enter a String : ");

// console.log(palindrome(string));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 03   



// function possibleCombinition(string){
//     let combinition = [];

//     for(var i = 0 ; i < string.length ; i++)
//     {
//         for(var j = i + 1 ; j < string.length + 1 ; j++)
//         {
//             combinition.push(string.slice(i,j));
//         }
//     }
//     return combinition
// }

// //console.log(possibleCombinition("dog"))
// var string = prompt("Enter a string :","to find a combinition of words");
// console.log(possibleCombinition(string));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 04    


// function alphabet_order(str) {
//     return str.split('').sort().join('');
// }
// var string = prompt("Enter a String : ",'abc');

// alert(alphabet_order(string));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 05   


// function firstLetterUpperCAse(string){
//     var arr = string.split(" ");

//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
//     }

//     var str2 = arr.join(" ");

//     return str2;
// }

// var string = prompt("Enter a String : ","i have learned something new today");
// console.log(firstLetterUpperCAse(string));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 06   


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 07    


// function vowel_count(str1) {
//     var vowel_list = 'aeiouAEIOU';
//     var vcount = 0;

//     for (var x = 0; x < str1.length; x++) {
//         if (vowel_list.indexOf(str1[x]) !== -1) {
//             vcount += 1;
//         }

//     }
//     return vcount;
// }
// var string = prompt("Enter a String : ","The quick brown fox");
// console.log("String : " + string);
// console.log(vowel_count(string));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 08   


// function test_prime(n) {

//     if (n === 1) {
//         return false;
//     }
//     else if (n === 2) {
//         return true;
//     } else {
//         for (var x = 2; x < n; x++) {
//             if (n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// var num = prompt("Enter any Number : ",35);
// console.log("Number : " + num);
// console.log(test_prime(num));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 09    


// function detectDataType(value){
//     var dtypes = [Function,RegExp,Number,Boolean,Object], x, len;
//     if(typeof value === "object" || typeof value === "function")
//     {
//         for(x = 0,len = dtypes.length; x < len;x++)
//         {
//             if(value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//         }
//     }
//     return typeof value;
// }

// console.log(detectDataType(435));
// console.log(detectDataType('anas'));
// console.log(detectDataType(true));


//---------------------------x----------------x--------------------------------


                                // QUESTION : 10    


// var array = [3,2,5,2,5,7,4,7,3,5,3,6,3,8,2,5,8,8,8,8,8,8,2];
// console.log(array.sort());

// var outputArray = [];

// function arrayTrim(){
//     var sortedArray = array.sort();

//     for(var i = 0;i<sortedArray.length;i++)
//     {
//         if(sortedArray[i] !== sortedArray[i+1])
//         {
//             outputArray.push(sortedArray[i+1]);
//             break;
//         }
//     }
//     for(var i = sortedArray.length ;i >= 0 ;i-- )
//     {
//         if(sortedArray[i-1] !== sortedArray[i-2])
//         {
//             outputArray.push(sortedArray[i-2]);
//             break;
//         }

//     }
//     return outputArray;
// }

// console.log(arrayTrim());
