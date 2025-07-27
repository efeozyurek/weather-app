const input = document.querySelector(".search input[type='text']")
const button = document.querySelector(".search input[type='submit']")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const condition = document.querySelector(".condition")

button.addEventListener("click", () => {
    const cityDisplay = input.value.trim();
    if (!cityDisplay) return;

    fetch(`/weather?city=${cityDisplay}`)
    .then(res => res.json())
    .then(data => {
        city.textContent = data.city;
        temp.textContent = `${data.temp}°C`
        condition.textContent = data.condition;
    })
    .catch(err => {
        console.error("error:", err)
    })
})
