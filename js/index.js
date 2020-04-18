//-- Global Variables --//
var wordArray = []
var pageArray = []
var totalPageNumber = 0

//-- Setup --//
function setup(){
    getData()
}

//-- Business Logic Functions --//

// Get Data from Firestore
function getData(){
    db.collection("words").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            wordArray.push(doc.data())
        });
    
        // Calculate the total page number
        if (wordArray.length > 0) {
            totalPageNumber = Math.ceil(wordArray.length / 100)
        }
    
        // adjust wordArray
        wordArray.sort(function(a,b){
            return a.id - b.id
        }).reverse()

        pageArray = wordArray.slice(0,100)

        // call related methods
        createPagination(totalPageNumber)
        createRows(pageArray)
        setTotalWordsCount(wordArray.length)
    });
}
// create rows
function createRows(wordArray) {
    
    // setup current page array
    pageArray = wordArray

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
        var en_word = '<div class="en-word"><label>'+word.word+'</label> '+ voiceButton +'  </div>'

        var left_area = '<div class="left-area '+ colorClass +' "> '+ en_word + en_example +' </div>'
        var right_area = '<div class="right-area"> ' + description + tr_word + ' </div>'
        
        var row = '<div class="row"> '+ left_area + right_area +'  </div>'

        $("#container").append(row)
        
    })
}
// create pagination
function createPagination(totalPageNumber){
    for (i = 1; i <= totalPageNumber; i++) {
        var aTag = '<a class="page-area-ul-li-a">'+ i +'</a>'
        var liTag = ''
        if (i == 1){
            liTag = '<li id='+'page'+ i +' class="page-item page-area-ul-li page-active">' + aTag + '</li>'
        } else {
            liTag = '<li id='+'page'+ i +' class="page-item page-area-ul-li">' + aTag + '</li>'
        }

        $(".page-area-ul").append(liTag)
    }
}
// The number of words in wordList
function setTotalWordsCount(length){
    var htmlItem = '<span style="font-size: 25px;" >'+ length +' </span>words'
    $("#count").html(htmlItem)
}

//-- Trigger Funtions --//

//  description modal trigger
$('#container').on('click', '.click_description', function(){
    var itemId = this.id
    var currentId = getOrderNumber(itemId)

    modal.style.display = "block";
    $("#show_word").text(pageArray[currentId].description)
})
// Turkish description modal trigger 
$('#container').on('click', '.click_tr', function(){
    var itemId = this.id
    var currentId = getOrderNumber(itemId)

    modal.style.display = "block";
    $("#show_word").text(pageArray[currentId].meaning)
})
// gif
$('body').on('click', '#count', function(){
    modal.style.display = "block";
    var content = '<iframe id="gif" src="https://giphy.com/embed/RS581ZSvMveaQ" width="80%" frameBorder="0" class="giphy-embed" ></iframe>'
    $("#show_word").html(content)
})
// mix trigger for word list
$("#mix").click(function(){

    // active page style
    $(".page-area-ul-li").not(this).removeClass("page-active");
    $('.page-area-ul-li:first-child').addClass('page-active');

    // create rows by mixed array
    $("#container").empty();
    createRows(shuffle(wordArray))
})
// mix trigger for mobile word list
$("#menu-mix").click(function(){

    // active page style
    $(".page-area-ul-li").not(this).removeClass("page-active");
    $('.page-area-ul-li:first-child').addClass('page-active');

    // create rows by mixed array
    $("#container").empty();
    createRows(shuffle(wordArray))
})
// gamification trigger
$("#game").click(function(){
    window.location = 'game.html';
})
// swipe game trigger
$("#swipe").click(function(){
    window.location = 'swipe-game.html';
})
// page trigger
$('body').on('click', '.page-item', function(){
    var itemId = this.id
    var currentId = getOrderNumber(itemId)

    $(this).addClass("page-active");
    $(".page-area-ul-li").not(this).removeClass("page-active");

    var currentWordArray = wordArray
    if(currentId == 1){
        currentWordArray = wordArray.slice(0,100)
    } else {
        currentWordArray = wordArray.slice((currentId-1)*100, currentId * 100)
    }
    $("#container").empty();
    createRows(currentWordArray)
})

//-- Helper Functions --//

// order number method
function getOrderNumber(withText){
    var txt = withText
    var numb = txt.match(/\d/g);
    numb = numb.join("");
    return numb
}
// shuffle method for array items
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
// get clicked word
function getVoice(index){
    var tappedWord = pageArray[index].word

    responsiveVoice.setDefaultVoice("US English Male");
    responsiveVoice.speak(tappedWord)
}