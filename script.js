let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let pokemonName = document.getElementById("pokemon-name");
let pokemonId = document.getElementById("pokemon-id");
let pokemonWeight = document.getElementById("weight");
let pokemonHeight = document.getElementById("height");
let pokemonImg = document.getElementById("sprite");
let pokemonHp = document.getElementById("hp");
let pokemonAttack = document.getElementById("attack");
let pokemonDefense = document.getElementById("defense");
let pokemonSpecialAttack = document.getElementById("special-attack");
let pokemonSpecialDefense = document.getElementById("special-defense");
let pokemonSpeed = document.getElementById("speed");

const fetchData = async (nameOrId) => {
    let apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId.toLowerCase()}`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        updateDisplay(data);
      } catch (err) {
        console.log(err);
        alert("Pokémon not found");
      }
};

const updateDisplay = (pokemonData) => {
    pokemonName.innerHTML = pokemonData.name.toUpperCase();
    pokemonId.innerHTML = `#${pokemonData.id}`;
    pokemonWeight.innerHTML =  `Weight: ${pokemonData.weight}`;
    pokemonHeight.innerHTML =  `Height: ${pokemonData.height}`;
}

searchButton.addEventListener('click', () => {
    fetchData(searchInput.value);
});

