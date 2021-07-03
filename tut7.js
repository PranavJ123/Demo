console.log("Here we learn about creating,removing and replacing elements.");
let element = document.createElement('li');
element.className = 'childul';
element.id = 'created';
element.setAttribute('title' , 'mytitle');
element.innerText = "which i want to achieve";
element.innerHTML = "<b>which i want to achieve</b>";
let ul = document.querySelector('ul.this');
ul.append(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.className = "elem2";
elem2.id = "elem2";
let text = document.createTextNode('This is created by text node method.');
element.replaceWith(text);
let myul = document.getElementById('myul');
myul.removeChild(document.getElementById('lui'));

let pr = elem2.hasAttribute('id');
elem2.removeAttribute('id');
elem2.setAttribute('title','myelem2title');
// console.log(elem2,pr);
