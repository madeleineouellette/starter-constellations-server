const axios = require("axios");
const url = "http://localhost:9000/constellations";

/*const leo = {
  name: "Leo",
  meaning: "Lion",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};

axios
  .get(url)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(url, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log);


  const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    return axios.get(url);
  });
  return Promise.all(promises)
}*/



/*  function updateIfExists(id, body) {
    const url = `${BASE_URL}/constellations/${id}`;
    return axios
      .get(url)
      .then(() => {
        axios.put(url, body).then(({ data }) => {
          console.log(data);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }*/
  

 /* function updateIfExists(id, body) {
    const url = `${BASE_URL}/constellations/${id}`;
     axios
      .get(url)
      .then((response) => {
      return response.data
    })
      .catch((error) => {
       return error.message;
      });
  }*/


/*axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

const url = "http://localhost:9000/constellations";
axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
 const url = "http://localhost:9000/constellations";
 axios
    .post(url, {
      name: "Ara",
      meaning: "Altar",
      starsWithPlanets: 7,
      quadrant: "SQ3",
    })
    .then((response) => {
      console.log(response.data);
    });

    const idToDelete = "33sJSj-";
   axios.delete(`${url}${idToDelete}`);

 
 
const idToDelete = "s2dJ2op";
 axios.delete(`${url}/${idToDelete}`);
 axios.get(`${url}/${idToDelete}`);

axios.delete("http://localhost:9000/constellations/33sJSj-")*/

    