// submit the new word to the database
$("form").submit(function(e){
    e.preventDefault()

    var newWord = {
        id: new Date().getTime(),
        word: "",
        example: "",
        description: "",
        meaning: "",
        correctScore: 0,
        wrongScore: 0,
        active: true
    }
    
    newWord.word = $("#word-input").val()
    newWord.example = $("#example-input").val()
    newWord.description = $("#description-input").val()
    newWord.meaning = $("#meaning-input").val()

    db.collection("words").add(newWord)
    .then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        $('input').val("");
        $('#submit').val("Add");
        $("#info").html("The word has created successfully.")
    })
    .catch(function(error) {
        $('input').val("");
        $('#submit').val("Add");
        $("#info").html(error)
    });
});

// mix trigger for word list
$("#logout").click(function(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        //console.log('User Logged Out!');
        window.location = 'index.html'; //After successful logout, user will be redirected to index.html
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
})

var totalWordArray = []
var exportName = "backup"

function getData(){
    db.collection("words").orderBy("id", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            totalWordArray.push(doc.data())
        })
    }).then(() => {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(totalWordArray));
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href",     dataStr);
            downloadAnchorNode.setAttribute("download", exportName + ".json");
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }
    );
}

$("#download").click(function(){
    getData()
})


// Don't use 
// for (let i=0; i<wordList.length; i++) { 
//     task(i); 
//     } 
    
//     function task(i) { 
//     setTimeout(function() { 
        
//         var word = array[i]
//         db.collection("words").add({
//             id: new Date().getTime(),
//             word: word.eng,
//             example: word.example,
//             description: word.description,
//             meaning: word.tr,
//             correctScore: 0,
//             wrongScore: 0,
//             active: true
//         })
//         .then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch(function(error) {
//             console.error("Error adding document: ", error);
//         });
//     }, 100 * i); 
//     } 
    


//create user -- Don't use it 
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode, errorMessage)
//     // ...
//   })