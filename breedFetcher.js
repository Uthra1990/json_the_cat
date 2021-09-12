const request = require("request")

const breedName = process.argv[2];

request(('https://api.thecatapi.com/v1/breeds/search?q=' + breedName), (error, response, body) => {

    const data = JSON.parse(body);
    if (error) {
        console.log('Error fetch details:', error);
      } else {
        console.log(data[0].description);
      }
  });
