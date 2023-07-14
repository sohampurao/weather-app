# Weather App

This repository contains a Weather App, a web application that provides real-time weather information for a given location. It utilizes various APIs and technologies to fetch and display accurate weather data.

## Demo

- 👉 Netlify: https://ssp-weather-app.netlify.app

## Screenshots

#### Desktop View

The screenshot showcases the Weather App in a desktop view. The user interface is designed to make efficient use of the available screen space and provide a seamless experience for users accessing the application on desktop devices.

![Weather App Desktop View Screenshot](https://res.cloudinary.com/dazvnvkca/image/upload/v1689317579/Readme%20Images/weather-app/desktop-view_wthf22.png)

#### Mobile View (Responsive)

The screenshot showcases the responsive design of the Weather App when viewed on a mobile device. With a user-friendly and visually appealing interface, the mobile view of the Weather App ensures optimal usability and accessibility for users on smaller screens.

![Weather App Mobile View Screenshot](https://res.cloudinary.com/dazvnvkca/image/upload/v1689317577/Readme%20Images/weather-app/mobile-view_xtupep.png)

## Features

- Current Weather: Get the current weather conditions including temperature, humidity, wind speed, and more for a specified location.
- 7-Day Forecast: View the weather forecast for the next seven days, including temperature, weather conditions, and precipitation.
- Search by Location: Enter a city name or postal code to get weather information for that specific location.
- Responsive Design: The application is designed to be responsive, allowing users to access it on different devices and screen sizes.

## Technologies Used

The Weather App is built using the following technologies:

- HTML: The structure and layout of the application are created using HTML.
- CSS: CSS is used for styling the user interface and making it visually appealing.
- JavaScript: The core functionality of the application is implemented using JavaScript.
- OpenWeatherMap API: This application integrates with the OpenWeatherMap API to fetch weather data for different locations.
- Axios: Axios is used as an HTTP client to make requests to the OpenWeatherMap API.
- Bootstrap: Bootstrap is utilized for responsive design and pre-built UI components.
- Font Awesome: Font Awesome provides a library of icons used in the application.

## Installation

To run the Weather App locally, follow these steps:

#### 1. Clone the repository:

```bash
  git clone https://github.com/sohampurao/weather-app.git
```

#### 2. Navigate to the project directory:

```bash
  cd weather-app
```

#### 3. Open the index.html file in a web browser.

## Configuration

The Weather App requires an API key from OpenWeatherMap to fetch weather data. To configure the API key, follow these steps:

#### 1. Create an account on OpenWeatherMap and obtain an API key.

#### 2. Open the script.js file in the project directory.

#### 3. Navigate to 9th line.

#### 4. Replace the placeholder 'YOUR_API_KEY' with your actual API key obtained from OpenWeatherMap:

`const credentials {X-RapidAPI-Key= 'YOUR_API_KEY'}`

#### 5. save changes.

## Usage

- Enter a location in the search bar and press Enter or click the search button to retrieve weather information for that location.
- The current weather conditions and 7-day forecast will be displayed on the screen.
