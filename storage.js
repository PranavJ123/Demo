console.log("Here we learn about local and session storage");
// localStorage.setItem('Name','Pranav');
// localStorage.setItem('Name2','Aviral');
// localStorage.clear();
localStorage.removeItem('notes');
let name = localStorage.getItem('Name');


let impArr = ['adrak','pyaz','bhindi'];
// localStorage.setItem('Sabzi',JSON.stringify(impArr));
name = localStorage.getItem('Sabzi');
console.log(JSON.parse(name));

// sessionStorage.setItem('sName','Pranav');
// sessionStorage.setItem('sName2','Aviral');
// sessionStorage.setItem('Sabzi',JSON.stringify(impArr));