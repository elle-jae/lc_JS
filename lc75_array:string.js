// Question: 1768: Merge Strings Alternately

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let word1Array = word1.split("");
    let word2Array = word2.split("");
    let mashup = [];

    while ( i < word1.length || i < word2.length) {
        mashup.push(word1Array[i]);
        mashup.push(word2Array[i]);
        i++
    }
    return console.log(mashup.join(""));
};