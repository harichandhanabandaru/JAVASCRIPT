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