// import { greeter } from { ./ts-greeter.js};
function greeter(person)  {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);