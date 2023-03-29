let name='Max'
let age=29
let hasHobbies=true

age=30;
name='Maximilian';

function summarizeUser(userName,userAge,userHasHobby)
{
    return ("Name is "+userName+" has age "+userAge+" has hobby "+userHasHobby);
}
console.log(summarizeUser(name,age,hasHobbies))


const summarize= function(userName,userAge,userHasHobby)
{
    return ("Name is "+userName+" has age "+userAge+" has hobby "+userHasHobby);
}
console.log("Summarize data ",summarize(name,age,hasHobbies))


const summarizeArrowFunction= (userName,userAge,userHasHobby)=>
{
    return ("Name is "+userName+" has age "+userAge+" has hobby "+userHasHobby);
}
console.log("summarizeArrowFunction data ",summarizeArrowFunction(name,age,hasHobbies))

const add=(a,b)=>{
    return a+b;
}

console.log("add ",add(1,2))

const addFunction=(a,b)=>a+b;
console.log("addFunction ",addFunction(1,2))

const addOne=(a)=>a+1;
console.log("addOne ",addOne(1))

const addRandom=()=>2+1;
console.log("addRandom ",addRandom())