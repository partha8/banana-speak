var inputText=document.querySelector(".section-input-area");
var translateBtn=document.querySelector(".btn-translate");
var result=document.querySelector(".section-result-area")

const url="	https://api.funtranslations.com/translate/minion.json";

function getTranslateUrl(input){
    return url + "?" + "text="+input;
}

function errorHandler(error){
    console.log(error);
    alert("Error with the server");
}
function clickHandler(){
    var input=inputText.value;

    fetch(getTranslateUrl(input))
    .then(resp => resp.json())
    .then(json => {
        result.innerText=json.contents.translated;
    })
    .catch(errorHandler);
}

translateBtn.addEventListener('click' , clickHandler);

