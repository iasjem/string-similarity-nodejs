var first_string = document.getElementById('first_string');
var second_string = document.getElementById('second_string');
var check_similarity_button = document.getElementById('check_similarity_button');
var test_results = document.getElementById('test_results');

function compare(first_string, second_string) {
    return stringSimilarity.compareTwoStrings(first_string, second_string);
}

check_similarity_button.addEventListener('click', function () {
    var results = compare(first_string.value, second_string.value);
    var rounded_results = results ? Math.round((results * 100) * 100) / 100 : 0

    check_similarity_button.disabled = true;
    first_string.disabled = true;
    second_string.disabled = true;

    setTimeout(function () {
        check_similarity_button.disabled = false;
        first_string.disabled = false;
        second_string.disabled = false;
        test_results.innerHTML = "Strings match around: " + rounded_results + "%"
    }, 500);
});