function giveFood(arg) {
    let input = arg.toLowerCase();
    let text = "";
    switch(input){
        case "montag":
        text = "Angebot des Tages : Pizza";
        break;
        case "dienstag":
        text = "Angebot des Tages : Salat";
        break;
        case "mittwoch":
        text = "Angebot des Tages : Döner";
        break;
        case "donnerstag":
        text = "Angebot des Tages : Dürum";
        break;
        case "freitag":
        text = "Angebot des Tages : Grillhähnchen";
        break;
        default:
        text = "Geben Sie einen Wochentag ein!";
    }
    output6.innerHTML = text;

}
function check() {
    if (input1.value === input2.value) {
        output1.innerHTML = "Die Eingaben stimmen überein";
    } else {
        output1.innerHTML = "Die Eingaben stimmen NICHT überein";
    }
    (input1.value === input2.value) ? output1.innerHTML = "Die Eingaben stimmen überein" : output1.innerHTML = "Die Eingaben stimmen NICHT überein";

}
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);        

/* iteration in object */
for (const par of paragraphs) {
    par.innerHTML = '<a href="#">Link zu nirgendwo2</a>';
}

/* iteration in array & collection */
for (const par in paragraphs) {
    paragraphs[par].innerHTML = '<a href="#">Link zu nirgendwo</a>';
}
/* array only */
let numbers = [1,2,3,4];
numbers.forEach(element => {            
    console.log(element * element);
});


