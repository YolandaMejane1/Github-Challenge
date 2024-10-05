document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    // Display current time
    function displayCurrentTime() {
        const now = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[now.getDay()];
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // Add leading zero
        const timeString = `${day} ${hours}:${minutes}`;
        console.log(timeString); // Log the current time for debugging
        document.querySelector(".current-details").innerHTML = `${timeString}, moderate rain <br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;
    }

    // Form submission handling
    const form = document.querySelector("form");
    const inputField = document.querySelector(".search-input");
    const cityElement = document.querySelector(".current-city");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload
        const cityName = inputField.value; // Get the value from the input field
        if (cityName) {
            cityElement.textContent = cityName; // Update the city name
        }
    });

    // Call to display time
    displayCurrentTime();
    setInterval(displayCurrentTime, 60000); // Update every minute
});