# Nodejs_Task

1)Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series. The application should be performant at scale to handle larger numbers without slowing down exponentially.
2)A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List S) that, given a string S, returns an array of the longest balanced substring of S.Examples:

Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
string S is made only of lowercase letters (a−z).

Note:

     command to run the program => node app.js
