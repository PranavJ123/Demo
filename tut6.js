console.log("Here we learn traversing in DOM");

let cont = document.querySelector('.container');
let nodeName = cont.childNodes[5].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

let container = document.querySelector('div.container');
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);

console.log(container.firstChild.nextSibling);
console.log(container.previousElementSibling);
// console.log(cont.childNodes);
// console.log(cont.children);

