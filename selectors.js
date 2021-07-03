console.log("Here we learn about Javascript element selectors");

let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
element.innerText = "Pranav is a good boy";
element.innerHTML = "<b>My name is Pranav jain</b>"
// console.log(element.innerText);


let sel = document.querySelector("#first");
sel = document.querySelector(".child");
sel = document.querySelector("div");
// sel.style.color = 'green';
// console.log(sel);


let elems = document.getElementsByClassName('child');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(function(element){
    console.log(element);
    element.style.color = 'blue';
})