const axios = require("../utils/axios");
const BASE_URL = "http://localhost:9000";

function bulkDelete(ids) {
  const promises = ids.map((id) => {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.get(url);
  })
  return Promise.all(promises)
}

module.exports = {
  bulkDelete,
};
