function lowerCaseWords(mixedArray) {

    return new Promise((resolve, reject) => {

        if (!Array.isArray(mixedArray)) {
            reject("Error: Input must be an array");
        } else {

            // Remove numbers, booleans, and other non-string values
            let words = mixedArray.filter(item => typeof item === "string");

            // Change all remaining words to lowercase
            let lowerWords = words.map(item => item.toLowerCase());

            // Return the final array using resolve
            resolve(lowerWords);
        }
    });
}

// Test the function with the mixed array from the lab
// const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];


// Test with an invalid input
let mixedArray = 123;

// lowerCaseWords(mixedArray)


// Print the result or display an error if the Promise is rejected
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));

