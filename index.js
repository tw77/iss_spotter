// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);

//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned coordinates:' , coordinates);

//     fetchISSFlyOverTimes(coordinates, (error, times) => {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
    
//       console.log('It worked! Returned fly-over times:' , times);
//     })
//   });
// });

const { nextISSTimesForMyLocation } = require('./iss');

const listPassTimes = function(times) {
  for (const time of times) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  listPassTimes(times);
});


