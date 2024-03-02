// Question: 1768: Merge Strings Alternately

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// var mergeAlternately = function(word1, word2) {
//     let i = 0;
//     let word1Array = word1.split("");
//     let word2Array = word2.split("");
//     let mashup = [];

//     while ( i < word1.length || i < word2.length) {
//         if (word1Array[i] !==undefined) {
//         mashup.push(word1Array[i]);
//         }
//         if (word2Array[i] !== undefined){
//         mashup.push(word2Array[i]);
//         }
//         i++
//         console.log(mashup);
//         }
//     return console.log((mashup.join("")));
// };

// mergeAlternately("abc", "xyz");
// mergeAlternately("abcd", "xyz");
// mergeAlternately("abc", "wxyz");

// LC says out put is undefined? result shows it's a type of string...follow up with Sammie. Also ask about string vs string builder on run time

// ***************************************

// alternate solution to Merge String Alternately using strings

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// var mergeAlternately = function(word1, word2) {
//     let i = 0;
//     let mashup = "";

//     while ( i < word1.length || i < word2.length) {
//         if (word1.charAt(i) !==undefined) {
//         mashup += word1.charAt(i);
//         }
//         if (word1.charAt(i) !== undefined){
//         mashup += word2.charAt(i);
//         }
//         i++
//         console.log(mashup);
//         }
//     return console.log(mashup);
// };

// mergeAlternately("abc", "xyz");
// mergeAlternately("abcd", "xyz");
// mergeAlternately("abc", "wxyz");

// ***************************************

// Question 1071: Greatest Common Divisor 
// review 

// var gcdOfStrings = function(str1, str2) {

//     if (str1 + str2 !== str2 + str1) {
//         return console.log("No pattern");
//     } else if (str1 == str2) {
//         return console.log(str1);
//     } else if (str1.length > str2.length) {
//         return console.log(str1.substring(str2.length));
//     }
// };


// gcdOfStrings("ABCABC", "ABC");
// gcdOfStrings("ABABAB", "ABAB");
// gcdOfStrings("LEET", "CODE");

// ***************************************

// Question 1431: Kids with the Greatest Number of Candies 

// version with loop to find max number-need to fix for kidsWithCandies([2,8,7], 1); cases

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestNumber = "";
//     let result = [];

//     for (let i = 0; i < candies.length; i++) {
//         if(candies[i] > greatestNumber) {
//             greatestNumber = candies[i];
//             console.log(greatestNumber);
//         } if(candies[i] + extraCandies < greatestNumber) {
//                 result.push(false);
//             } else {
//                  result.push(true);
//                 }
        
//     }
//     return console.log(result);
// };

// kidsWithCandies([2,3,5,1,3], 3);
// kidsWithCandies([4,2,1,1,2], 1);
// kidsWithCandies([12,1,12],10);
// kidsWithCandies([2,8,7], 1);

// **** alternate answer using Math.max NOTE: need to use spread (elipse/...) when passing an array of numbers

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];

//     for (let i = 0; i < candies.length; i++) {
//        if(candies[i] + extraCandies < Math.max(...candies)) {
//                 result.push(false);
//             } else {
//                  result.push(true);
//                 }
//     }
//     return console.log(result);
// };

// kidsWithCandies([2,8,7], 1);

// *******************************
// Question 605 Can Place Flowers

// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */

var canPlaceFlowers = function(flowerbed, n) {
let flowerCounter = 0;
let i =0;

while (i < flowerbed.length) {
      
    if (flowerbed[i] == 0 && flowerbed[i +1] !== 1 && flowerbed[i -1] !== 1) {
        flowerbed[i] = 1;
        console.log(flowerbed);
        flowerCounter++;
        console.log(flowerCounter);
    
}
i++;
}  if (flowerCounter < n) {
    return console.log("false"); 
} else {
   return console.log("true");
}
};


canPlaceFlowers([1,0,0,0,1], n=1);