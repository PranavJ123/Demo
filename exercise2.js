console.log("Exercise 2");
// You have to create a div and inject it into the page which contains a heading .
// Whenever someone clicks on the div ,it should be converted into the editable item. Whenever user clicks away (blur) save the note into the local Storage.


let div = document.createElement('div');
let text = document.createTextNode('I am a editable text.');
div.appendChild(text);
div.setAttribute('id', 'elem');
div.setAttribute('class', 'elem');
div.setAttribute('style', 'border:2px solid black; width:154px; margin:34px; padding:23px;')
let container = document.querySelector('.container');
let first = document.getElementById('first');

container.insertBefore(div, first);

div.addEventListener('click',function(){
    let html = elem.innerHTML;
    div.innerHTML = ` <textarea class="form-control" id="textarea" class= "textarea" rows="3">${html}</textarea>`

})