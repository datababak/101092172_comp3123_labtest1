// Question 2 - Promises
// This exercise shows how to handle successful and rejected promises.

// This function returns a successful promise after half a second
function resolvedPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = { message: 'delayed success!' };

            resolve(success);

        }, 2500);

    });
}


// This function returns a rejected promise after half a second
function rejectedPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let error = { error: 'delayed exception!' };

            reject(error);

        }, 500);

    });
}


// Both promises run separately. One succeeds and the other fails.
// I used .then() and .catch() to handle both situations.

// Call the first function and display the successful result
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Call the second function and display the error message
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));