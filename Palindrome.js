/*
    Thursday: Palindrome Checker

    Declare a function isPalindrome(str) that takes a string as an input.

    Return true if the given string is a palindrome. Otherwise, return false.
*/

function isPalindrome(str) {
    let s = str.split("");
    let r = s.reverse();
    let j = r.join("");
    if (str == j) {
        console.log("true")
    } else {
        console.log("false")
    }

}

isPalindrome("shadi");