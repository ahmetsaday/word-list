// create rows
function createRows(wordArray) {
    wordArray.forEach((word, index) => {
        
        var colorClass = ""
        if (index % 2 == 0) {
            colorClass = 'first-color'
        } else {
            colorClass = 'second-color'
        }
            
        var question_icon = '<i class="far fa-question-circle fa-2x"></i>'
        var info_icon = '<i class="fas fa-info-circle fa-2x"></i>'

        var tr_word = '<div id="word'+index+'" class="tr-word click_tr"> '+ question_icon + '</div>'
        var description = '<div id="description'+index+'" class="description click_description"> '+ info_icon +'  </div>'

        var en_example = '<div class="en-example"><label>'+ word.example +'</label></div>'
        var en_word = '<div class="en-word"><label>'+word.word+'</label> </div>'

        var left_area = '<div class="left-area '+ colorClass +' "> '+ en_word + en_example +' </div>'
        var right_area = '<div class="right-area"> ' + description + tr_word + ' </div>'
        
        var row = '<div class="row"> '+ left_area + right_area +'  </div>'

        $("#container").append(row)
        
    })
}

//  description modal trigger
$('#container').on('click', '.click_description', function(){
    var itemId = this.id
    var currentId = getOrderNumber(itemId)

    modal.style.display = "block";
    $("#show_word").text(wordArray[currentId].description)
})

// Turkish description modal trigger 
$('#container').on('click', '.click_tr', function(){
    var itemId = this.id
    var currentId = getOrderNumber(itemId)

    modal.style.display = "block";
    $("#show_word").text(wordArray[currentId].meaning)
})

// gif
$('body').on('click', '#count', function(){
    modal.style.display = "block";
    var content = '<iframe id="gif" src="https://giphy.com/embed/RS581ZSvMveaQ" width="540" frameBorder="0" class="giphy-embed" ></iframe>'
    console.log(content)
    $("#show_word").html(content)
})

// The number of words in wordList
function setTotalWordsCount(length){
    var htmlItem = '<span style="font-size: 30px;" > '+ length +' </span> words'
    $("#count").html(htmlItem)
}

// get data
var wordArray = []
db.collection("words").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        wordArray.push(doc.data())
    });

    wordArray.sort(function(a,b){
        return a.id - b.id
    }).reverse()
    // call related methoeds
    createRows(wordArray)
    setTotalWordsCount(wordArray.length)
});

// call createRows
createRows(wordArray)

// order number method
function getOrderNumber(withText){
    var txt = withText
    var numb = txt.match(/\d/g);
    numb = numb.join("");
    return numb
}

// mix trigger for word list
$("#mix").click(function(){
    $("#container").empty();
    createRows(shuffle(wordArray))
})

// gamification trigger
$("#game").click(function(){
    window.location = 'game.html';
})

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