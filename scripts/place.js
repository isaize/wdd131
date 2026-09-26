const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const temperature = 17; // °C
const windSpeed = 20; // km/h

function calculateWindChill(temperature, windSpeed){
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const windchillElement = document.getElementById("wind-chill");
if (temperature <= 10 && windSpeed > 4.8) {
  windchillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + ' °C';
} else {
  windchillElement.textContent = "N/A";
}

