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