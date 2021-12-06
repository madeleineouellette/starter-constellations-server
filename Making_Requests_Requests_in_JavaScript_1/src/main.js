const axios = require("../utils/axios");
const BASE_URL = "http://localhost:9000";

function getAllNames() {
  axios
  .get(BASE_URL)
  .then((response) => {
    console.log(response.name)
  })
}

function getConstellationsByQuadrant(quadrant) {}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
