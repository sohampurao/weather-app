// getting the HTML elements for document
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const weatherDetailsElement = document.getElementById('weather-details');
const otherInfoElement = document.getElementById('other-info');
const foreCastCardsElement = document.getElementById('forecast-cards');

// Api key obtained from : https://rapidapi.com/weatherbit/api/weather
const credentials = {
  'X-RapidAPI-Key': 'c6d63562c0msh3abf0931bc4f024p19fe1fjsnbb904e8f8fdd',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
};

// array of days in the week
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Thrusday',
  'Friday',
  'Saturday',
  'Sunday',
];

// array of months in a year
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

setInterval(() => {
  var time = new Date();
  var day = time.getDay();
  var date = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Add leading zeros to minutes if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes;

  timeElement.innerHTML =
    hours +
    ':' +
    minutes +
    ' ' +
    `<span class="am-pm text-uppercase"> ${ampm}</span>`;

  dateElement.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

const getCurrentLocationWeatherData = () => {
  navigator.geolocation.getCurrentPosition((success) => {
    let { longitude, latitude } = success.coords;

    const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${longitude}&lat=${latitude}&units=metric`;
    const options = {
      method: 'GET',
      headers: credentials,
    };
    fetch(url, options).then((response) =>
      response.json().then((response) => {
        if (response.message) {
          return alert(response.message2);
        } else {
          showCurrentLocationWeatherData(response);
        }
      })
    );
  });
};
getCurrentLocationWeatherData();

const showCurrentLocationWeatherData = (response) => {
  const {
    city_name,
    temp,
    uv,
    pres,
    sunrise,
    sunset,
    timezone,
    country_code,
    wind_spd,
    lon,
    lat,
  } = response.data[0];

  weatherDetailsElement.innerHTML = `<li class="weather-item">
  <div title='location'><i class="fa-solid fa-location-dot"></i></div>
  <div>${city_name}</div>
</li>
<li class="weather-item">
  <div title='Temprerature'><i class="bi bi-sunrise-fill"></i></div>
  <div>${temp} &#8451;</div>
</li>
<li class="weather-item">
  <div title='Wind Speed'><i class="bi bi-wind"></i></div>
  <div>${wind_spd.toFixed(3)} Km/hr</div>
</li>
<li class="weather-item">
  <div title="Sunrise"><i class="bi bi-sunrise-fill"></i></div>
  <div>${sunrise} AM</div>
</li>
<li class="weather-item">
  <div title='Sunset'><i class="bi bi-sunset-fill"></i></div>
  <div>${sunset} PM</div>
</li>`;

  otherInfoElement.innerHTML = `<div class="time-zone" id="time-zone">${timezone}</div>
  <div class="other-info-item">
    ${country_code}
  </div>
  <div class="other-info-item">
    Longitude ${lon}
  </div>
  <div class="other-info-item">
    Longitude ${lat}
  </div>
  <div class="other-info-item">
    Pressure: ${pres} Pa
  </div>
  <div class="other-info-item">
    UV index: ${getIntensityLabel(uv)}
  </div>`;
};

const getWeatherForecastData = () => {
  navigator.geolocation.getCurrentPosition((success) => {
    const { longitude, latitude } = success.coords;
    const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric`;
    const options = {
      method: 'GET',
      headers: credentials,
    };
    fetch(url, options).then((response) =>
      response.json().then((response) => {
        if (response.message) {
          return;
        } else {
          const data = response.data;
          let forecastCards = '';
          data.forEach(displayCards);
          function displayCards(item, index) {
            let day = getDayFromDate(item.datetime);
            forecastCards += `<article class="forecast p-2 rounded swiper-slide">
          <img
            src="https://cdn.weatherbit.io/static/img/icons/${item.weather.icon}.png"
            alt="weather icon"
            class="weather-icon"
          />
          <div class="pb-2">
            <h>${day}</h>
            <hr />
            <div class="forecast-temp">Night- ${item.min_temp}&#8451;</div>
            <hr />
            <div class="forecast-temp">Day- ${item.max_temp}&#8451;</div>
          </div>
        </article>`;
          }
          foreCastCardsElement.innerHTML = forecastCards;
        }
      })
    );
  });
};
getWeatherForecastData();

// This function returns the uv index status
function getIntensityLabel(uvIndex) {
  if (uvIndex >= 0 && uvIndex <= 2) {
    return 'Low';
  } else if (uvIndex >= 3 && uvIndex <= 5) {
    return 'Moderate';
  } else if (uvIndex >= 6 && uvIndex <= 7) {
    return 'High';
  } else if (uvIndex >= 8 && uvIndex <= 10) {
    return 'Very High';
  } else if (uvIndex >= 11) {
    return 'Extreme';
  } else {
    return 'Unknown';
  }
}

// This functions take datastring e.g.'01-01-2000' and returns weekday
function getDayFromDate(date) {
  var date = new Date(date);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

// This fuction set parameters for swipwer carousel
const swiper = new Swiper('.my-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
