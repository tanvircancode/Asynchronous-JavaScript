


const processOrder = () =>{
    console.log(`processing order for customer 1`);
    var time = new Date();
    var currentTime = time.getTime();
    while (currentTime + 3000 >= new Date().getTime());

    // setTimeout(() => {
    //     console.log(`Cooking Completed`);
    // },500);
    console.log(`order processed for customer 1`);
};


console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
