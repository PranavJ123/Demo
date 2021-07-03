console.log("Here we learn about asynchronous programming");

setTimeout(() => {
    for (let index = 0; index < 10005; index++) {
        const element = index;
        console.log("The index number is "+element);
        
    }
}, 100);


console.log("Done printing");