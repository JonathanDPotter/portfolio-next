//an unfortunate consequence of using the Heroku hobby tier is that it takes a full minute for my backend APIs to "wake" after the front ends make their first requests. By issuing a get request to each of my back-end projects immediately after someone opens my portfolio, the back-ends have all woken up by the time the user opens the front-end and there is no annoying wait time.

const wake = () => {
  try {
    fetch("https://jonathan-potter-blog-api-2.herokuapp.com/healthcheck");
  } catch (error: any) {
    console.log(error);
  }

  try {
    fetch("https://jonathan-potter-weather-api.herokuapp.com//healthcheck");
  } catch (error: any) {
    console.log(error);
  }

  try {
    fetch("https://upc-tracker.herokuapp.com//healthcheck");
  } catch (error: any) {
    console.log(error);
  }

  try {
    fetch("https://jp-todos-api-22f1a0f56308.herokuapp.com/healthcheck");
  } catch (error: any) {
    console.log(error);
  }
};

export default wake;
