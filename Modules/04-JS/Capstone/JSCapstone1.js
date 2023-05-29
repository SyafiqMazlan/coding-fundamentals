/* 
Return the missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

//Starter code:
function missingLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str.charCodeAt(i + 1) - str.charCodeAt(i)) > 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}

//Test cases:
console.log(missingLetter("abce")); // should return the string d.
console.log(missingLetter("abcdefghjklmno")); //should return the string i.
console.log(missingLetter("stvwx")); //should return the string u.
console.log(missingLetter("bcdf")); //should return the string e.
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz")); //should return undefined.