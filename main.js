let Phrase = require("kinako2003k-palindrome-js");

function palindromeTester(event) {
    event.preventDefault();

    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}"はパリンドロームです！`;
    } else {
    palindromeResult.innerHTML = `"${phrase.content}"はパリンドロームではありません`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
    palindromeTester(event);
    });
});
