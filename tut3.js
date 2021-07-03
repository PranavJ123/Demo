console.log('tut3');
let num=String(34);
console.log("Data type is:" +(typeof num));

let name='pranav';
let greeting='Good Morning';
console.log(greeting + ' ' + name);

let str="This is Javascript tutorial";
console.log(str.concat(' by Pranav'));
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('is'));
console.log(str.lastIndexOf('is'));
console.log(str.charAt(6));
console.log(str.endsWith('l'));
console.log(str.includes('is'));
console.log(str.substring(1,6));
console.log(str.slice(-8));
console.log(str.split(' '));
console.log(str.replace('This','that'));


let fruit1='orange\'';
let fruit2='apple';
let myHtml=`Hello ${name}
        <h1>This is "my" heading</h1>
        <p>You like ${fruit1} and ${fruit2}`;
        document.body.innerHTML=myHtml;
