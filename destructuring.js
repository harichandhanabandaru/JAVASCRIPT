const person={
    name:'Max',
    age:29,
    greet(){
        console.log(" Hi Iam "+this.name)
    }
}

const printName=(personData)=>{
    console.log(" personData ",personData);
}

printName(person)

// destructing

const printNameDestructuring=({name,age})=>{
    console.log(" personData ",name,"  ",age);
}

printNameDestructuring(person)

const {name,age}=person;
console.log(" name ",name,"  age ",age);

const hobbies=['sports','cooking'];
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2)
