Project 2
# API-Project (City News and Weather App with React)

## View project: https://sei-project-2-news-app.netlify.app

<img width="1656" alt="Project 2" src="https://user-images.githubusercontent.com/85187554/149318555-7ca9a103-149e-4ab2-b7f8-0d4992f6c26b.png">

## Brief 
* Consume a public API
* Have several components 
* The app should have a router with several "pages"
* Be deployed online and accessible to the public

##Tech used

* HTML5
* CSS
* React
* Axios
* Node
* Git
* GitHub

## MVP:

- A list of news articles for 3 cities around the world using a news API.
- A description of the weather in each of the 3 cities using a weather API.
- Produce an image as a background to house the news and weather components above from an image API.

## Extras:

- Search bar for cities or countries around the world.
- An icon that changes depending on the weather description.
- Add a time indicator for the city location.

Our end goal would be to be able to access all of the 500 cities and 7 countries held on the news API database. A user could input their current location and our app would bring back the relevant data for that location.

## Running the app

To run the app you will need to run the following command in your terminal with your project open in vs code.

### yarn add

This will run and install the necessary modules required for the app to run

### yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Github Repo

open https://github.com/neilmurcho13/api-project

## Approach

My partner and I used Trello to plan out tasks for this project and to identify challenging areas of this build. To begin with we spent a lot of time pair coding until we were happy we had the basics down.

We then split off to complete individual sections of the project. I focused on the news and weather API and getting both elements to show on the page. 


## Build

I used Axios and a GET request to receive the data from the API.
```javascipt
import axios from "axios";
 
const baseUrl = "https://newsapi.org/v2/everything?";
const newsApiKey = "&apiKey=bb9fc9b6b8af4a6bab3079213d4c4c9d";
 
export const EverythingLondon = () => {
 return axios.get(`${baseUrl}q=london&pageSize=3&page=1${newsApiKey}`);
};
 
export const EverythingNewYork = () => {
 return axios.get(`${baseUrl}q=newyork&pageSize=3&page=1${newsApiKey}`);
};
 
export const EverythingNewDelhi = () => {
 return axios.get(
   `${baseUrl}q=dehli&pageSize=3&page=1&language=en${newsApiKey}`
 );
};
 
```

Once I had the data I built the front end using React. Using state and UseEffect I was able to select the top headline along with the temperature of the individual city from the API.
```javascript
import React from "react";
import { LondonWeather } from "../../lib/WeatherApi";
import WeatherCard from "../wetherCards/WeatherCard";
import { getPhotosLondon } from "../../lib/ImageApi";
import { randomNumberGenerator } from "../images/Images";
import { EverythingLondon } from "../../lib/NewsApi";
import CityCard from "../cityIndex/CityCard";
 
const LondonWeatherComponent = () => {
 const [state, setState] = React.useState({
   londonWeather: { weather: [{ description: "" }], main: { temp: "" } },
 });
 const [bgImage, setBgimage] = React.useState("");
 
 // fetches a photo of london and sets it to state. The state is then used as the background image of the
 // section that wraps the information
 React.useEffect(() => {
   (async () => {
     const res = await getPhotosLondon();
     const randomNumber = randomNumberGenerator(res.data.results.length);
     const randomImage = res.data.results[randomNumber].urls.regular;
     setBgimage(randomImage);
   })();
 }, []);
 
 const fetchWeatherFromApi = async () => {
   try {
     const res = await LondonWeather();
     setState({ londonWeather: res.data });
   } catch (err) {
     console.log("an error has occured fetching weather api", err);
   }
 };
 
 React.useEffect(() => {
   fetchWeatherFromApi();
 }, []);
 
 const [londonState, setLondonState] = React.useState({ londonNews: [] });
 
 const fetchLondonFromApi = async () => {
   try {
     const res = await EverythingLondon();
     setLondonState({ londonNews: res.data.articles });
   } catch (err) {
     console.log("an error has occured fetching London news", err);
   }
 };
 React.useEffect(() => {
   fetchLondonFromApi();
 }, []);
 
 return (
   <section
     className="section"
     style={{
       backgroundImage: `url(${bgImage})`,
       backgroundPosition: "center",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       width: "100vw",
       height: "100vh",
     }}
   >
     <div clas="container">
       <WeatherCard
         description={state.londonWeather.weather[0].description}
         icon={state.londonWeather.weather[0].icon}
         temp={state.londonWeather.main.temp}
         feels_like={state.londonWeather.main.feels_like}
       />
     </div>
     <hr></hr>
     <div className="container">
       <div className="columns is-multiline">
         {londonState.londonNews.map((london) => (
           <CityCard
             key={london.key}
             title={london.title}
             description={london.description}
             source={london.source}
             url={london.url}
             urlToImage={london.urlToImage}
           />
         ))}
       </div>
     </div>
   </section>
 );
};
 
export default LondonWeatherComponent;
 
```







## Where we ended up:

We completed the page for London but need to replicate this for Delhi and New York as well.  

## Highlights:

We have a working version of the London page that shows a random image, the weather and temperature and three headlines from that city.

We are also calling data from three APIs and displaying it.

## Struggles:

We initially had some difficulty in getting the information out of the three APIs and understanding the form that this information would take.

The extra challenge we had was bringing all the data together for three cities from three different APIs, and to display this information.

To overcome this we each took one API so we could understand the best way to process the data. I took the news and weather API’s and created a basic React component that displayed the news headlines and local weather reports. Once we had this in place my partner was able to implement the images from the API as a background cover to the news and weather information.


## What we would like to add to the project:

We would like to refactor the code to make it more streamlined and remove the duplication for different cities.
We would like to include a way to allow users to select the cities that they wish to have on their screens.
Including weather condition symbols and local times for each city would be good.
Some improvements to the UI, style and lazy loading features would help to make it look slicker.

## What we learnt:

Taking stock of what we learned after each step checking whether this changed our approach and reconsidering our assumptions would have been helpful.

Planning and wireframing helps a lot but laying out the basic fundamental code to deliver those plans is also important and would have helped us ensure we were thinking about the issues practically and not just in theory.

## Would we recommend trying this?

I would recommend calling data from a single API first before trying this project and then using this project as a more advanced option.

