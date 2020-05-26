 // Get the rank modal
 var rankModal = document.getElementById("rankModal")
 
 // When the user clicks on <span> (x), close the modal
//  span.onclick = function() {
//      rankModal.style.display = "none";
//  }


    var rankNameValue = ""
    var currentRankImgValue = ""
    var nextRankValue = ""
    var formerRankValue = ""

 // Create Rank Content
function createRank(totalWordCount){
        
        calculetRank(totalWordCount)

        var formerRankImg = '<img class="rank-image" src="images/'+ formerRankValue +'.jpg"/>'
        var formerRankDiv = '<div class="rank"> '+ formerRankImg +' </div>'

        var currentRankImg = '<img class="rank-image" src="images/'+ currentRankImgValue +'.jpg"/>'
        var rankName = '<h2 style="margin-bottom: 2px;"> ' + rankNameValue +' </h2>'
        var currentRank = '<h6 style="margin-top: 0px;">Current Rank</h6>'
        var currentRankDiv = '<div id="current-rank" class="rank"> '+ currentRankImg + rankName + currentRank +' </div>'

        var nextRankImg = '<img class="rank-image" src="images/'+ nextRankValue +'.jpg"/>'
        var nextRankDiv = '<div class="rank"> '+ nextRankImg +' </div>'
        
        var content = formerRankDiv + currentRankDiv + nextRankDiv

        return content
}

function calculetRank (wordNumber){
    switch (true) {

        case (wordNumber < 100) :
            rankNameValue = "Second Lieutenant"
            currentRankImgValue = "second_lieutenant"
            nextRankValue = "first_lieutenant"
            formerRankValue = "second_lieutenant"
            break;

        case (wordNumber < 200) :
            rankNameValue = "First Lieutenant"
            currentRankImgValue = "first_lieutenant"
            nextRankValue = "captain"
            formerRankValue = "second_lieutenant"
            break;

        case (wordNumber < 300) :
            rankNameValue = "Captain"
            currentRankImgValue = "captain"
            nextRankValue = "major"
            formerRankValue = "first_lieutenant"
            break;

        case (wordNumber < 400) :
            rankNameValue = "Major"
            currentRankImgValue = "major"
            nextRankValue = "lieutenant_colonel"
            formerRankValue = "captain"
            break;


        case (wordNumber < 500) :
            rankNameValue = "Lieutenant Colonel"
            currentRankImgValue = "lieutenant_colonel"
            nextRankValue = "colonel"
            formerRankValue = "major"
            break;

        case (wordNumber < 600) :
            rankNameValue = "colonel"
            currentRankImgValue = "colonel"
            nextRankValue = "brigadier_general"
            formerRankValue = "lieutenant_colonel"
            break;

        case (wordNumber < 700) :
            rankNameValue = "Brigadier General"
            currentRankImgValue = "brigadier_general"
            nextRankValue = "major_general"
            formerRankValue = "colonel"
            break;

        case (wordNumber < 800) :
            rankNameValue = "Major General"
            currentRankImgValue = "major_general"
            nextRankValue = "lieutenant_general"
            formerRankValue = "brigadier_general"
            break;

        case (wordNumber < 900) :
            rankNameValue = "Lieutenant General"
            currentRankImgValue = "lieutenant_general"
            nextRankValue = "general"
            formerRankValue = "major_general"
            break;

        case (wordNumber < 1000) :
            rankNameValue = "General"
            currentRankImgValue = "general"
            nextRankValue = "general_of_the_army"
            formerRankValue = "lieutenant_general"
            break;

        case (wordNumber == 1000) :
            rankNameValue = "General Of The Army"
            currentRankImgValue = "general_of_the_army"
            nextRankValue = "general_of_the_army"
            formerRankValue = "general"
            break;
        
    
        default:
            rankNameValue = "Second Lieutenant"
            currentRankImgValue = "second_lieutenant"
            nextRankValue = "second_lieutenant"
            formerRankValue = "second_lieutenant"
            break;
    }
}