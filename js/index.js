
var wordList = [
    {eng: "hostility", tr: "düşmanlık", example:"They showed open (= obvious) hostility to/towards their new neighbours.", description:"an occasion when someone is unfriendly or shows that they do not like something"},
    {eng: "whence", tr: "nereden", example:"If they misbehave, they're sent back from whence they came.", description:"(from) where"},
    {eng: "complaint", tr: "şikayet", example:"We've received a complaint from one of our listeners about offensive language.", description:"a statement that something is wrong or not satisfactory"},
    {eng: "fabulous", tr: "harika, çok iyi", example:"She looked absolutely fabulous in her dress.", description:"very good; excellent"},
    {eng: "barrister", tr: "dava avukatı", example:"A man observed the barrister of the criminal who was waiting for the decision of the jury.", description:"a type of lawyer in the UK , Australia, and some other countries who can give specialized legal advice and can argue a case in both higher and lower courts."},
    {eng: "commute", tr: "iş ve ev arasında gidip gelmek", example:"It's exhausting commuting from Brighton to London every day.", description:"to make the same journey regularly between work and home"},
    {eng: "anxious", tr: "endişeli", example:"I saw my sister's anxious face at the window.", description:"worried and nervous"},
    {eng: "reputation", tr: "itibar, ün", example:"The company has a worldwide reputation for quality.", description:"the opinion that people in general have about someone or something, or how much respect or admiration someone or something receives, based on past behaviour or character"},
    {eng: "posh", tr: "lüks", example:"He takes her to some really posh restaurants.", description:"(of places and things) expensive and of high quality"},
    {eng: "grave", tr: "mezar", example:"He visits his mother's grave every Sunday.", description:"a place in the ground where a dead person is buried"},
    {eng: "obnoxious", tr: "iğrenç", example:"When she's in a bad mood she's obnoxious to everyone.", description:"very unpleasant or rude"},
    {eng: "obscure", tr: "pek bilinmeyen", example:"an obscure island in the Pacific.", description:"not known to many people"},
    {eng: "ambivalent", tr: "kararsız, karışık duygular hisseden", example:"I felt very ambivalent about leaving home.", description:"having two opposing feelings at the same time, or being uncertain about how you feel"},
    {eng: "ambiguous", tr: "belirsiz", example:"The wording of the agreement is ambiguous.", description:"having or expressing more than one possible meaning, sometimes intentionally"},
    {eng: "inquire", tr: "bilgi almak, sormak", example:"Mrs Tuck called half an hour ago to inquire whether her order was ready.", description:"to ask for information"},
    {eng: "indomitable", tr: "direnen, yılmaz", example:"The indomitable human spirit", description:"used to say that someone is strong, brave, determined, and difficult to defeat or frighten"},
    {eng: "persuasion", tr: "ikna", example:"Invite discussion, and be open to correction and persuasion.", description:"the action of persuading someone or of being persuaded"},
    {eng: "bafflement", tr: "birşeyi tam anlatamama, açıklayamama", example:"The Bill Murray character in the film spends much of his time in Tokyo gazing in bafflement at the city through the windows of a skyscraper.", description:"the condition of being completely unable to understand or explain something"},
    {eng: "accomplishment", tr: "başarılı, başarılan iş", example:"Getting the two leaders to sign a peace treaty was his greatest accomplishment.", description:"something that is successful, or that is achieved after a lot of work or effort"},
    {eng: "onwards", tr: "o zamandan bu yana", example:"I'm usually at home from five o'clock onwards.", description:"beginning at a particular time and continuing after it"},
    {eng: "retrospect", tr: "geçmişi düşünmek", example:"I'm sure my university days seem happier in retrospect than they really were.", description:"thinking now about something in the past"},
    {eng: "bluntly", tr: "açıkça konuşmak", example:"And yet the only reason we know about her is because, bluntly, she fucked up.", description:"If you speak bluntly, you speak without trying to be polite or considering other people's feelings"},
    {eng: "prologue", tr: "önsöz", example:"The book contains 11 chapters, plus a prologue and epilogue, and an extensive suggested reading list.", description:"a part that comes at the beginning of a play, story, or long poem, often giving information about events that happened before the time when the play, story, or poem begins"},
    {eng: "attraction", tr: "cazibe", example:"She felt an immediate physical attraction to him.", description:"the feeling of liking someone, especially sexually, because of the way they look or behave"},
    {eng: "captivate", tr: "cezbetmek", example:"With her beauty and charm, she captivated film audiences everywhere.", description:"to hold the attention of someone by being extremely interesting, exciting, pleasant, or attractive"},
    {eng: "hail", tr: "dolu", example:"There will be widespread showers of rain, hail and sleet.", description:"small, hard balls of ice that fall from the sky like rain"},
    {eng: "descent", tr: "iniş", example:"These apes were beginning descent from the trees.", description:"family and relations"},
    {eng: "hip", tr: "kalça", example:"This exercise is designed to trim your hips and stomach.", description:"the area below the waist and above the legs at either side of the body, or the joint that connects the leg to the upper part of the body"},
    {eng: "slight", tr: "az miktarda", example:"She had a slight headache.", description:"small in amount or degree"},
    {eng: "kin", tr: "akrabalık", example:"They’re not any kin of mine.", description:"family and relations"},
    {eng: "ponder", tr: "kafa yormak", example:"She sat back for a minute to ponder her next move in the game.", description:"to think carefully about something, especially for a noticeable length of time"},
    {eng: "dawn", tr: "şafak", example:"We left as dawn was breaking ", description:"the period in the day when light from the sun begins to appear in the sky"},
    {eng: "bargain", tr: "anlaşma, düşük fiyat", example:"Unions bargain with employers for better rates of pay each year.", description:"an agreement between two people or groups in which each promises to do something in exchange for something else"},
    {eng: "groggy", tr: "halsiz", example:"I felt a little bit groggy for a couple of days after the operation.", description:"weak and unable to think clearly or walk correctly, usually because of tiredness or illness"},
    {eng: "occasion", tr: "bir şeyin gerçekleştiği zaman dilimi", example:"We met on several occasions to discuss the issue.", description:"a particular time, especially when something happens or has happened"},
    {eng: "reclaim", tr: "geri kazanım", example:"You'll be able to reclaim the tax on all equipment that you buy.", description:"to take back something that was yours"},
    {eng: "burden", tr: "yük", example:"I'm a burden to you.", description:"a heavy load that you carry"},
    {eng: "bizarre", tr: "tuhaf", example:"It's bizarrely disconnected from the reality of the situation.", description:"very strange and unusual"},
    {eng: "immersion", tr: "bir şeye dalmak/yoğunlaşmak", example:"Total immersion in a videogame is almost like living another life.", description:"the fact of becoming completely involved in something:"},
    {eng: "orchard", tr: "meyve bahçesi", example:"an apple orchard", description:"an area of land where fruit trees (but not orange trees or other citrus trees) are grown"},
    {eng: "sphere", tr: "küre", example:"This changes the shape of the cornea from a spoonlike form to a sphere.", description:"an object shaped like a round ball"},
    {eng: "fold", tr: "katlamak", example:"I folded the letter (in half) and put it in an envelope.", description:"to bend something, especially paper or cloth, so that one part of it lies on the other part, or to be able to be bent in this way"},
    {eng: "rival", tr: "rakip, rekabet", example:"He beat his closest/nearest rival by 20 marks.", description:"a person, group, etc. competing with others for the same thing or in the same area"},
    {eng: "revel", tr: "cümbüş", example:"The 6,000 Scots who travelled to Rome revelled till late in the city's squares.", description:"to dance, drink, sing, etc. at a party or in public, especially in a noisy way"},
    {eng: "ingredient", tr: "damak", example:"The list of ingredients included 250 g of almonds.", description:"a food that is used with other foods in the preparation of a particular dish"},
    {eng: "palate", tr: "damak", example:"I let my palate dictate what I eat.", description:"the top part of the inside of your mouth"},
    {eng: "contestant", tr: "yarışmacı", example:"In tonight's quiz, our contestants have come from all over the country.", description:"someone who competes in a contest"},
    {eng: "rite", tr: "ayin", example:"You have to go through an initiation rite before you become a full member.", description:"(a usually religious ceremony with) a set of fixed words and actions"},
    {eng: "interrogate", tr: "sorgulamak", example:"Thousands of dissidents have been interrogated or imprisoned in recent weeks.", description:"to ask someone a lot of questions for a long time in order to get information, sometimes using threats or violence"},
    {eng: "quay", tr: "iskele", example:"London was a port and a sequence of waterfronts, quays , and warehouses developed along the north bank of the Thames.", description:"a long structure, usually built of stone, where boats can be tied up to take on and off their goods"},
    {eng: "obstacle", tr: "engel", example:"The biggest obstacle in our way was a tree trunk in the road.", description:"something that blocks you so that movement, going forward, or action is prevented or made more difficult"},
    {eng: "capable", tr: "yetenekli", example:"We need to get an assistant who's capable and efficient.", description:"able to do things effectively and skilfully, and to achieve results"},
    {eng: "acquaintance", tr: "tanıdık, bilgi", example:"he is my business acquaintance", description:"a person that you have met but do not know well"},
    {eng: "grudge", tr: "kin", example:"I don't bear any grudge against you.", description:"a strong feeling of anger and dislike for a person who you feel has treated you badly, especially one that lasts for a long time"},
    {eng: "consume", tr: "tüketme", example:"He was consumed with jealousy.", description:"to use fuel, energy, or time, especially in large amounts"},
    {eng: "presume", tr: "varsaymak", example:"I don't wish to presume, but don't you think you should apologize to her?", description:"to believe something to be true because it is very likely, although you are not certain"},
    {eng: "abortion", tr: "kürtaj", example:"Abortion is restricted in some American states", description:"the intentional ending of a pregnancy"},
    {eng: "contagious", tr: "bulaşıcı", example:"The infection is highly contagious, so don't let anyone else use your towel.", description:"A contagious disease can be caught by touching someone who has the disease or a piece of infected clothing"},
    {eng: "disorder", tr: "düzensizlik, kargaşa", example:"The whole office was in a state of disorder.", description:"a state of untidiness or lack of organization"},
    {eng: "wilderness", tr: "el değmemiş doğa", example:"a beautiful mountain wilderness", description:"an area of land that has not been used to grow crops or had towns and roads built on it, especially because it is difficult to live in as a result of its extremely cold or hot weather or bad earth"},
    {eng: "reckless", tr: "umursamaz", example:"He was found guilty of reckless driving.", description:"doing something dangerous and not worrying about the risks and the possible results"},
    {eng: "rescue", tr: "kurtarmak", example:"The government has refused to rescue the company from bankruptcy.", description:"to help someone or something out of a dangerous, harmful, or unpleasant situation"},
    {eng: "intervention", tr: "müdahale", example:"Half the people questioned said they were opposed to military intervention in the civil war.", description:"the action of becoming intentionally involved in a difficult situation, in order to improve it or prevent it from getting worse"},
    {eng: "convention", tr: "kongre", example:"the national Democratic convention", description:"a large formal meeting of people who do a particular job or have a similar interest, or a large meeting for a political party"},
    {eng: "precision", tr: "hassas", example:"Great precision is required to align the mirrors accurately.", description:"the quality of being exact"},
    {eng: "redundant", tr: "gereğinden fazla", example:"In the sentence 'She is a single unmarried woman', the word 'unmarried' is redundant.", description:"unnecessary because it is more than is needed"},
]
    
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
            var en_word = '<div class="en-word"><label>'+word.eng+'</label> </div>'

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
        $("#show_word").text(wordList[currentId].description)
    })

    // Turkish description modal trigger 
    $('#container').on('click', '.click_tr', function(){
        var itemId = this.id
        var currentId = getOrderNumber(itemId)

        modal.style.display = "block";
        $("#show_word").text(wordList[currentId].tr)
    })
        
    $('body').on('click', '#count', function(){
        modal.style.display = "block";
        var content = '<iframe id="gif" src="https://giphy.com/embed/RS581ZSvMveaQ" width="540" frameBorder="0" class="giphy-embed" ></iframe>'
        console.log(content)
        $("#show_word").html(content)
    })
    
    // The number of words in wordList
    window.onload = function(){
        var htmlItem = '<span style="font-size: 30px;" > '+ this.wordList.length +' </span> words'
        $("#count").html(htmlItem)
    }

    // call createRows
    createRows(wordList)
    
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
        createRows(shuffle(wordList))
    })

    // gamification trigger
    $("#game").click(function(){
        alert("very soon")
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
