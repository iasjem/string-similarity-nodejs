const stringSimilarity = require("string-similarity");

function compareTwoStrings (first_string, second_string) {
    return stringSimilarity.compareTwoStrings(first_string, second_string);
}

module.exports = {
    compareTwoStrings
}