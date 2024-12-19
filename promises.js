// create promise

// const testpromise1 = new Promise((resolve,reject)=>{
//     resolve("Hi there!");
//     // reject("useless")
// });

// testpromise1
// .then((data)=>{
//     console.log(data)
//     return "New data";
// })
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('Error is ',err);
// })



// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,200,'10');
// });
// const promise2 = new Promise((resolve,reject)=>{
//     resolve("hello")
// });
// const promise3 = new Promise((resolve,reject)=>{
//     resolve("Nice")
// });
// const promise4 = new Promise((resolve,reject)=>{
//     reject("meError!")
// })


// Promise.all([promise1,promise2,promise3]).then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log("Error: ",err)
// })

// Promise.race([promise1,promise2,promise3]).then((data)=>{
//     console.log("He won : ",data);
// }).catch(()=>{
//     console.log("Error in promise!");
// })


// Async/await
function fetchdata(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("Fetched You");
        }, 1000);
    });
}

async function fetchMe(){
    try {
        const result = await fetchdata();
        console.log(result);
        console.log("Move to next!!");
    } catch (error) {
        console.log("Took too much time!");
    }
}

fetchMe();
