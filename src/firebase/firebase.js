import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default}

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //
// //         console.log(expenses);
// //     });
//
// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //
// //         console.log(expenses);
// //     });
//
// // database.ref('expenses').push({
// //     description: 'Gum',
// //     note: '',
// //     amount: 195,
// //     createdAt: 0
// // });
//
//
// // database.ref('notes/-LBbPIkC2uGoZ2zs7oLC').remove();
//
// // database.ref('notes').push({
// //     title : 'Course topics',
// //     body : 'asdasdasd'
// // });
//
//
// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // }, (e) => {
// //     console.log("Error on data fetching", e);
// // });
//
// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //     console.log("Error fetching data", e);
// // });
//
//
// // database.ref().set({
// //     name: 'Povilas Stasiūnas',
// //     age: 26,
// //     stressLevel : 6,
// //     job : {
// //         title : 'Software developer',
// //         company : 'Google'
// //     },
// //     location: {
// //         city: 'Vilnius',
// //         country: 'Lithuania'
// //     }
// // }).then(() => {
// //     console.log("Data is saved");
// // }).catch((e) => {
// //     console.log("This fail", e);
// // });
// //
// // database.ref().update({
// //     stressLevel : 9,
// //     "job/company" : 'Amazon',
// //     "location/city" : 'Seattle'
// // });
//
// // database.ref('isSingle').remove().then(() => {
// //     console.log("Data was removed");
// // }).catch((e) => {
// //     console.log("Did not removed.", e);
// // });