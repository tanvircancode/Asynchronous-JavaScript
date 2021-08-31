
const takeOrder = (customer,callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking Completed`);
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 3000);
    console.log(`asdasd`)
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

