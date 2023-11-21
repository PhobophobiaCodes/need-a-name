//source random noun and adjective: https://github.com/dulldesk/words-api
//source word defintion: 
function capitalize(word){
    word = String(word);
    var capitalized = (word.charAt(0).toUpperCase()).concat(word.slice(1));
    return capitalized;
}
function getName(){
    $(".defintions").remove();
    $.getJSON('https://random-word-form.repl.co/random/noun', function(noun) {
        noun=capitalize(noun);

        $("#noun").text(noun);
        $.getJSON(`https://api.dictionaryapi.dev/api/v2/entries/en/${noun}`, function(nounDescription) {
            var defintions=nounDescription[0].meanings[0].definitions
            defintions.forEach(element => {
                $("#noun-container").append(`<p class="defintions">Definition: ${element.definition} </p>`)
            });
            $("#noun-description").text(nounDescription);
        });

        $.getJSON('https://random-word-form.repl.co/random/adjective', function(adjective) {
            adjective=capitalize(adjective);
            $("#adjective").text(adjective);
            $.getJSON(`https://api.dictionaryapi.dev/api/v2/entries/en/${adjective}`, function(adjectiveDescription) {
                var defintions=adjectiveDescription[0].meanings[0].definitions
                defintions.forEach(element => {
                    $("#adjective-container").append(`<p class="defintions">Definition: ${element.definition} </p>`)
                });
                $("#noun-description").text(nounDescription);
            });

            $("#name").text(adjective.concat(noun));
        });
    });
}
$(document).ready(function(){
    getName();
    $("button").click(function(){
        getName();
    });
});

