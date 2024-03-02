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

var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) {
        return console.log("No pattern");
    } else if (str1 == str2) {
        return console.log(str1);
    } else if (str1.length > str2.length) {
        return console.log(str1.substring(str2.length));
    }
};


gcdOfStrings("ABCABC", "ABC");
gcdOfStrings("ABABAB", "ABAB");
gcdOfStrings("LEET", "CODE");

// ***************************************

