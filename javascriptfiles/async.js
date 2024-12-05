// function mockApiCall() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('API Response'), 2000); // Simulates after 2 seconds
//     });
// }

// async function fetchData() {
//     console.log('Fetching data...');
//     const response = await mockApiCall();
//     console.log(response); // Logs: 'API Response' after 2 seconds
// }

// fetchData()


// excercise on fetching name

// const fetchUsername = () => {
//     return new Promise((resolve, reject) => {
//         const success = true; // Simulate success or failure
//         setTimeout(() => {
//             if (success) {
//                 resolve('Username found !!!')
//             } else {
//                 reject('Usename not found !!!')
//             }
//         }, 3000);
//     });
// };

// fetchUsername()
//     .then((message) => {
//         console.log(message)
//     })

//     .catch((error) => {
//         console.log(error)
//     })


// callback 

function processOrder(orderId, callback) {
    console.log(`Processing order ${orderId}`);

    setTimeout(() => {
        console.log(`Order ${orderId} Processed !`)

        callback(orderId);
    }, 3000);
}

function notifyUser(orderId) {
    setTimeout(() => {
        console.log(`notification sent to ${orderId}`)
    }, 2000);
}

processOrder(100, notifyUser)
notifyUser(200)