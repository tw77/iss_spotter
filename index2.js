const { nextISSTimesForMyLocation } = require('./iss_promised');
const { listPassTimes } = require('./index');

nextISSTimesForMyLocation()
  .then((times) => {
  listPassTimes(times);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });