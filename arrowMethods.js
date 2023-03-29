const person={
    name:'Max',
    age:29,
    greet(){
        console.log(" Hi Iam "+this.name)
    }
}

const hobbies=['sports','Cooking',1,true,{name:"hello"}];
console.log("Hobbies ",hobbies);
console.log(" Array  Map functions ",hobbies.map(hobby=>{ return "Hobby "+hobby;}))

for(let hobby of hobbies)
{
    console.log(" hobby ",hobby)
}

