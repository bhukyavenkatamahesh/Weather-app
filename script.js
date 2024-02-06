const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=695d088c90e9489faab124517240602&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  const container = document.getElementById("weather-details");
  container.innerHTML = `
      <h2>${result.location.name}, ${result.location.region}, ${result.location.country}</h2>
      <p>Local Time: ${result.location.localtime}</p>
      <p>Latitude: ${result.location.lat}</p>
      <p>Longitude: ${result.location.lon}</p>
      <p>Timezone: ${result.location.tz_id}</p>
    `;
});
