// work list app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaOfoNvGjnanz0o3zmWlgvj5AKNMlXHww",
    authDomain: "word-list-faf57.firebaseapp.com",
    databaseURL: "https://word-list-faf57.firebaseio.com",
    projectId: "word-list-faf57",
    storageBucket: "word-list-faf57.appspot.com",
    messagingSenderId: "380976787587",
    appId: "1:380976787587:web:549fe18b2486673a3cabb6",
    measurementId: "G-07E8B39RNJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

// db.collection("users").add({eng: "hostility", tr: "düşmanlık", example:"They showed open (= obvious) hostility to/towards their new neighbours.", description:"an occasion when someone is unfriendly or shows that they do not like something"},)
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// db.collection("words").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // console.log(`${doc.id} => ${doc.data()}`);
//         console.log(doc.data())
//     });
// });