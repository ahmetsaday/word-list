 // Global Variables
var globalFocusItemId = 0
 // Get the focus modal
 var focusModal = document.getElementById("focusModal")

 // Create Rank Content
function createFocusForm(wordId){

    // Get selected word
    var selectedWord = totalWordArray.filter(function(item) {
        return item.id == wordId
    })[0]

    // local variables
    var title = ""
    var message = ""
    var form = ""

    if(selectedWord.focus){
        title = 'The '+ '"' + selectedWord.word+ '"' +' word in the Focus List'
        form = '<div id="focus-modal-title"><label>'+title+'</label></div><div id="focus-modal-switch"><label class="switch"><input id="focus-toggle" type="checkbox" checked><span class="slider round"></span></label></div><div id="focus-modal-message"><label>'+message+'</label></div>'
    } else {
        title = 'Add the '+ '"' + selectedWord.word+ '"' +' word in the Focus List'
        form = '<div id="focus-modal-title"><label>'+title+'</label></div><div id="focus-modal-switch"><label class="switch"><input id="focus-toggle" type="checkbox"><span class="slider round"></span></label></div><div id="focus-modal-message"><label>'+message+'</label></div>'
    }

    return form
}

// Focus List Toggle
function focusListToggle() {
    // Get selected word
    var selectedWord = totalWordArray.filter(function(item) {
        return item.id == globalFocusItemId
    })[0]

    db.collection("words").doc(selectedWord.docId).update({
        focus: !selectedWord.focus
    })
    .then(function() {
        var index = totalWordArray.indexOf( totalWordArray.filter( function(i){return i.id==selectedWord.id} )[0] )
        totalWordArray[index].focus = !selectedWord.focus
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        // $(".update-info").html("There is something wrong.")
    })
}
