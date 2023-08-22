/*const { reject } = require("async");

function delay(time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },time);
    })
}

async function placeholder() {
    await delay(2000);
    console.log("order Taken");
}

async function startproduction() {
    await delay(2000);
    console.log("Production started ");
}

async function printid() {
    await delay(2000);
    console.log("ID printed ");
}*/

async function fetchdata(){
try {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new error("network error was not ok");
    }

    const data = await response.json();
    console.log(data);
}
catch (error) {
    console.log("error fetching data" , error);
}
fetchdata ();
}