const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios
  .get(BASE_URL)
  .then((response) => {
    console.log(`${BASE_URL}${constellations}`);
    const result = []
    for (let i = 0; i < response.length; i++){
      result += response.name
    }
    console.log(result)
  })
}

function getConstellationsByQuadrant(quadrant) {}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
