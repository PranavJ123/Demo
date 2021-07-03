console.log("Here we learn about javascript events");
document.getElementById('heading').addEventListener('click',function(e){
    let variable ;
    console.log("You have clicked on heading");
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = e.target.classList;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});

let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
function func1(e){
    // console.log("Thanks",e);
    e.preventDefault();

}
function func2(e){
    console.log("Thanks its a double click",e);
    e.preventDefault();

}
function func3(e){
    console.log("Thanks its a mousedown",e);
    e.preventDefault();

}

document.querySelector('.child').addEventListener('mouseenter',function(){
    console.log("You entered child");
})
document.querySelector('.child').addEventListener('mouseleave',function(){
    console.log("You exited child");
})
document.querySelector('.container').addEventListener('mousemove',function(){
    console.log("You triggered mouse move event");
})