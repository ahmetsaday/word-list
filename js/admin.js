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
    