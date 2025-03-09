// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];//array of cats
// destructive Function .
function destructivelyAppendCat(name) {//destructively removes a cat to the end of the cats array
    cats.push(name);
}
function destructivelyPrependCat(name) {//destructively adds a cat to the beginning of the cats array
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {//destructively removes the last cat from the cats array
    cats.pop();
}   
function destructivelyRemoveFirstCat() {//destructively removes the first cat from the cats array
    cats.shift();
}
// non-destructive Function.
function appendCat(name) {//adds a cat to the cats array and returns a new array, leaving the cats array unchanged
    return [...cats, name];
}
function prependCat(name) {// creates  a new array that includes the new cat at the beginning of the cats array
    return [name, ...cats];
}
function removeLastCat() {//returns a new array that includes the last cat in the cats array, leaving the cats array unchanged
    return cats.slice(0, cats.length - 1);
}   
function removeFirstCat() {//returns a new array excluding the first cat in the cats array, leaving the cats array unchanged
    return cats.slice(1);
}