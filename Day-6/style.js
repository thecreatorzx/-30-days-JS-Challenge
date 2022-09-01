const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

//  received data
let data = [];

const fetching = fetch(endpoint)
  .then((blob) => blob.json())
  .then((value) => data.push(...value));

let filter = (data, search) => {
  return data.filter((place) => {
    const regex = new RegExp(search, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};
function display() {
  let newdata = filter(data, this.value);
  const html = newdata
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li> 
    <span class = "name">${cityName}, ${stateName}</span>
    <span class = "population">${place.population}</span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}
// search
const searchBar = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchBar.addEventListener("change", display);
searchBar.addEventListener("keyup", display);
