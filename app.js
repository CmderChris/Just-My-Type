  
$(document).ready(function () {
    let upperKeys = ("#keyboard-upper-container");
    let lowerKeys = ("#keyboard-lower-container");
    const sentences = ["ten ate neite ate nee enet ite ate inet ent eate", "Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain nate eate tea anne inant nean", "itant eate anot eat nato inate eat anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate"];
    let sentenceIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let letterIndex = 0;
    let currentLetter = currentSentence[letterIndex];

    // appends current sentence and letter to document
    $("#sentence").text(currentSentence);
    $("#target-letter").text(currentLetter);

    //shows next letter to be typed on keypress and cycles to next sentence in the array
    $("body").keypress(function() {
        letterIndex++;
        if (letterIndex >= currentSentence.length) {
            sentenceIndex++;
            currentSentence = sentences[sentenceIndex];
            letterIndex = 0;
            currentLetter = currentSentence[letterIndex];
            $("#sentence").text(currentSentence);
            $("#target-letter").text(currentLetter);
            return;
        }
        currentLetter = currentSentence[letterIndex];
        $("#target-letter").text(currentLetter);


    //shows uppercase keyboard and hides lowercase keyboard when shift is held down
    $(upperKeys).hide();
    $(document).keydown(function (e) {
        if (e.which === 16) {
            $(upperKeys).show();
            $(lowerKeys).hide();
        }
    });

    //hides uppercase keyboard and shows lowercase keyboard again when shift is released
    $(document).keyup(function (e) {
        if (e.which === 16) {
            $(lowerKeys).show();
            $(upperKeys).hide();
        }
    });

    //changes the background color of key being pressed
    $(document).keypress(function (e) {
        let key = $("#" + e.which);
        $(key).css("background-color", "rgb(21,253,253)");
        $(document).keyup(function () {
            $(key).css("background-color", "#f5f5f5");
        });
    });

});