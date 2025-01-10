// singleton  -> Object.create
// object literals

const JsUser = {
    name:"rohit",
    age:19,
    location:"Kolkata",
    email:"alkardorhd@gmail.com",
    isLoggedIn:false,
    "Full name" : "Rohit Deka"
}



//Ways to access Objects
console.log(JsUser.email);
console.log(JsUser["email"]);

// IMP **
// To be abe to access data with key having space we need to use the 2nd method

console.log(JsUser["Full name"])


//IMP 2** { ABOUT SYMBOLS IN JS}

const mySym = Symbol("key1")

const JsUser2 = {
    [mySym]: "myKey1"
}

console.log(JsUser2.mySym) // this will give undefined because dot notation doesn't work for symbols
console.log(JsUser2[mySym]) // this will give value
console.log(typeof mySym) // this will give Symbol

// Change Values

JsUser.email = "alkardor@chatgpt.com";


//Freeze values

// Object.freeze(JsUser)

JsUser.email = "alkardo@microsoft.com"  // Wont give error but will not change

console.log(JsUser) 


JsUser.greeting = function(){
    console.log("hello");
}

JsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());