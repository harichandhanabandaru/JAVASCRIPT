const person={
    name:'Max',
    age:29,
    greet(){
        console.log(" Hi Iam "+this.name)
    }
}

// spread operator
const copiedPerson={...person};
console.log(copiedPerson)

const hobbies=['sports','Cooking'];
const copiedArray=hobbies.slice();
console.log(copiedArray)
const copiedArray2=[...hobbies];
console.log(copiedArray2)


// with out rest operator
const toArray = (arg1,arg2,arg3) =>{
    return [arg1,arg2,arg3];
}

console.log(toArray(1,2,3))
// does not allow extension
console.log(toArray(1,2,3,4))


//  rest operator
const toArrayOperator = (...args) =>{
    return args;
}

console.log(toArrayOperator(1,2,3,4))

