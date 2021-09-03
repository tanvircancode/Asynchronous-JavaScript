
const hasMeeting = false;

const meeting = new Promise(function (resolve, reject) {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google meet",
            time: "10:00 PM",
        };
        resolve(meetingDetails);
    }
    else {
        reject(new Error('Meeting already scheduled'));
    }
});

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calender);
//     });
// };

//below code will work as same as the above code
const addToCalender = (meetingDetails) => {
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calender);

};

const addToCalender2 = (meetingDetails) => {
        const calender2 = meetingDetails + ' We all love you';
        return Promise.resolve(calender2);
};


meeting
    .then(addToCalender)
    .then(addToCalender2)

    .then((res) => {
        console.log(res);
    })

    .catch(function (err){
        console.log(err.message);
    });

console.log(`Hello World`);
