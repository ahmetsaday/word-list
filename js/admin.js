// hide the update form when the site is loaded.
$( document ).ready(function() {
    $("#update-area").hide()
});

// submit the new word to the database
$("#addNewWordForm").submit(function(e){
    e.preventDefault()

    var newWord = {
        id: new Date().getTime(),
        word: $("#word-input").val(),
        example: $("#example-input").val(),
        description: $("#description-input").val(),
        meaning: $("#meaning-input").val(),
        correctScore: 0,
        wrongScore: 0,
        active: true
    }

    db.collection("words").add(newWord)
    .then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        $('input').val("");
        $('#submit').val("Add");
        $(".add-info").html("The word has created successfully.")
    })
    .catch(function(error) {
        $('input').val("");
        $('#submit').val("Add");
        $(".add-info").html(error)
    });
});


// Global Document Id
var docId = ""

// Search the word in the database
$("#searchWordForm").submit(function(e){
    e.preventDefault()
    
    var queryWord = $("#search-input").val()
    $(".search-info").html("")
    $(".update-info").html("")

    // Query
    db.collection("words").where("word", "==", queryWord)
    .get()
    .then(function(querySnapshot) {

        if (querySnapshot.empty) {
            $("#update-area").fadeOut()            
            $(".search-info").html("The word is not found.")
          } else {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                    
                

                // appear the update form
                $("#update-area").fadeIn()
                // write values to the inputs
                $("#update-word-input").val(doc.data().word)
                $("#update-description-input").val(doc.data().description)
                $("#update-example-input").val(doc.data().example)
                $("#update-meaning-input").val(doc.data().meaning)   
                
                // Write the doc id to the global doc id
                docId = doc.id          
            })
          }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        $(".search-info").html("There is something wrong.")
    })
})

// Update the word in the database
$("#updateWordForm").submit(function(e){
    e.preventDefault()

    db.collection("words").doc(docId).update({
        word: $("#update-word-input").val() ,
        description: $("#update-description-input").val() ,
        example: $("#update-example-input").val() ,
        meaning: $("#update-meaning-input").val() 
    })
    .then(function() {
        $(".update-info").html("Document successfully updated!")
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        $(".update-info").html("There is something wrong.")
    })
})

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

// BackUp Data
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

// backup to the words
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