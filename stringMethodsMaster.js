// string methods
// methods are function that belong to a specific object orobject type
// type in '.' look at all the methods we have on the string type!

// lastindexof
let email = 'ginny@tidepool.org'

let lastIndex = email.lastIndexOf('i')

console.log(lastIndex);

// slice, 2 arguments

let sliced = email.slice(0,5);
console.log(sliced);

//substring 1st argument is where we start, 2nd is how mancy characters we want

let substringed = email.substr(6,8);
console.log(substringed);

//replace
let letterReplace = email.replace('i', 'a');
console.log(letterReplace);

let wordReplace = email.replace('ginny', 'becky');
console.log(wordReplace);

//  a sequence of characters that define a search pattern
// https://regex101.com/

regex = /i/gmi
let regexReplacement = email.replace(regex, 'a');
console.log(regexReplacement);

//let's look at ghost inspector http-https redirect test
// let startURL=window.location.href;
// startURL = startURL.slice(0,5);
// return startURL=="https"
/// let's build it together, think about how you would do it manually and translate to automation

