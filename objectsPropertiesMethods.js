const person={
    name:'Max',
    age:29,
    greet:()=>{
        console.log(" Hi Iam "+this.name)
    }
}
// we get here undefined name because it refer to global scope
person.greet();

const personDetails={
    name:'Max',
    age:29,
    greet:function(){
        console.log(" Hi Iam "+this.name)
    }
}
personDetails.greet();


const personDetailsAnotherMethod={
    name:'Max',
    age:29,
    greet(){
        console.log(" Hi Iam "+this.name)
    }
}
personDetailsAnotherMethod.greet();