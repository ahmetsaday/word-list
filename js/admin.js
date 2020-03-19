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

    console.log(newWord)

    db.collection("words").add(newWord)
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    });
});
