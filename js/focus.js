
//-- Setup --//
function focusSetup(){
    getFocusData()
}

var focusWordArray = []

//-- Business Logic Functions --//

// Get Data from Firestore
function getFocusData(){
    db.collection("words").where("focus", "==", true).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            var focusWordArrayItem = doc.data()
            focusWordArrayItem.docId = doc.id
            focusWordArray.push(focusWordArrayItem)
        });
        createFocusRows(focusWordArray)
    });
}

function createFocusRows(wordArray) {
    // Create rows
    wordArray.forEach((word, index) => {
        
        var colorClass = ""
        if (index % 2 == 0) {
            colorClass = 'first-color'
        } else {
            colorClass = 'second-color'
        }
    
        var voiceButton =    '<div class="voice-button" onclick="getVoice('+ index+');"><i class="far fa-play-circle"></i></div>'

        var question_icon = '<i class="far fa-question-circle fa-2x"></i>'
        var info_icon = '<i class="fas fa-info-circle fa-2x"></i>'

        var tr_word = '<div id="word'+index+'" class="tr-word click_tr"> '+ question_icon + '</div>'
        var description = '<div id="description'+index+'" class="description click_description"> '+ info_icon +'  </div>'

        var en_example = '<div class="en-example"><label>'+ word.example +'</label></div>'
        var en_word = '<div class="en-word"><label id="'+word.id+'">'+word.word+'</label> '+ voiceButton +'  </div>'

        var left_area = '<div class="left-area '+ colorClass +' "> '+ en_word + en_example +' </div>'
        var right_area = '<div class="right-area"> ' + description + tr_word + ' </div>'
        
        var row = '<div class="row"> '+ left_area + right_area +'  </div>'

        $("#container").append(row)
        
    })
}