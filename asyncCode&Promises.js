const fetchData=()=>{
    setTimeout(()=>{
        console.log(" fetch data in settimein")
    },1500);
    console.log(" fetch data in settimeout1")
    console.log(" fetch data in settimeout2")

}

// asynchronous code
setTimeout(()=>{
    console.log("Timer is done!")
},2000);

// synchronous code
console.log('Hello!');
console.log('Hi!');
console.log(" fetchData ",fetchData())



const fetchDataCallBack= callback =>{
    setTimeout(()=>{
        callback('Done!');
    },3000);

}

// asynchronous code
setTimeout(()=>{
    console.log("Timer is done in second timer!");
    // sending text =>{console.log(text); } as argument and executing it after timer is done
    fetchDataCallBack(text =>{
        console.log(text);
    })
},5000);



// Promise function

const fetchDataPromise=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        },1500);
    });
    return promise;
}


console.log(" promised example ",fetchDataPromise().then(text=>{console.log(" text in promise ",text)}))

// asynchronous code
setTimeout(()=>{
    console.log("Timer is done in promise timer");
    fetchDataPromise().then(text=>{console.log(" text in promise timer ",text)})

    // chain of then blocks

    fetchDataPromise()
    .then(text=>{console.log(" text in promise timer chain 1",text); return fetchDataPromise()})
    .then(text2=>{console.log(" text in promise timer chain 2",text2);});


},2000);