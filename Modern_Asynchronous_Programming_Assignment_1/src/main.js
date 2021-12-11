const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
const url = (`${BASE_URL}/constellations/${constellation.id}`)
return axios
.put(url, constellation)
.then((response) => {
  return response
})
.catch((error) => {
  return error.message;
})
}

async function bulkImport(constellations) {
  if (!Array.isArray(constellations)){
    throw `error: "Inputted argument must be an array."`
  }
  const validity = constellations.every(isValid)
  if (!validity){
    throw `error: "All constellations must include relevant fields."`
  }
  const result = constellations.map(update)
  return await Promise.allSettled(result)
}
module.exports = { bulkImport, update };

