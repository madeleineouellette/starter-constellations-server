const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios
  .get(BASE_URL + "/constellations")
  .then((response) => {
    const result = response.data.map((data) => data.name)
    console.log(result)
  })
}

function getConstellationsByQuadrant(quadrant) {
  axios
  .get(BASE_URL + "/constellations")
  .then((response) => {
    const result = response.data.filter((data) => data.quadrant === quadrant)
    console.log(result)
  })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
