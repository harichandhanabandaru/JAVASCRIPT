const person={
    name:'Max',
    age:29,
    greet(){
        console.log(" Hi Iam "+this.name)
    }
}

const hobbies=['sports','Cooking'];
// even thoug hobbies is const we can edit it since refernce type in js
// reference type only store address,pointer where it is pointing
hobbies.push('Programming')
console.log(hobbies)
