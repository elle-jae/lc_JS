// Question: 1768: Merge Strings Alternately

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let word1Array = word1.split("");
    let word2Array = word2.split("");
    let mashup = [];

    while ( i < word1.length || i < word2.length) {
        if (word1Array[i] !==undefined) {
        mashup.push(word1Array[i]);
        }
        if (word2Array[i] !== undefined){
        mashup.push(word2Array[i]);
        }
        i++
        console.log(mashup);
        }
    return console.log((mashup.join("")));
};

mergeAlternately("abc", "xyz");

// LC says out put is undefined? result shows it's a type of string...follow up with Sammie. Also ask about string vs string builder on run time