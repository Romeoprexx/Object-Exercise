//For each of the exercises below, assume you are starting with the following programming object.
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};



//1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");


//2. Change the difficulty to the value of 7.
programming.difficulty= 7;


//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;


//4. Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun= true;


//5. Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
    
}


//6. Using a loop, console.log all of the keys in the programming object.
for (let singleLink in programming) {
    console.log(singleLink);
    
}


//7. Using a loop, console.log all of the values in the programming object.
for (let singleLink in programming) {
    console.log(programming[singleLink]);
    
}