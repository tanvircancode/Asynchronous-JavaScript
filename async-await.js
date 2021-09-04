// async function friendlyFunction() {
//      return `hello`;
// }
// console.log(friendlyFunction());


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

const addToCalender = (meetingDetails) => {
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calender);

};

const addToCalender2 = (meetingDetails) => {
        const calender2 = meetingDetails + ' We all love you';
        return Promise.resolve(calender2);
};

async function myMeeting() {
    try {
      const meetingDetails = await meeting;
      const calender = await addToCalender(meetingDetails);
      const calender2 = await addToCalender2(calender);
      console.log(calender2);
    }
    catch {
        console.log(`Something wrong happened`);
    }
}
myMeeting();
// meeting
//     .then(myMeeting)
//     .catch((err) => console.log(err.message));

console.log(`Hello World`);