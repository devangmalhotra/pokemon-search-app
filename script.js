const apiurl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
let searchInput = document.getElementById("search-input");
let pokemonName = document.getElementById("pokemon-name");
let pokemonId = document.getElementById("pokemon-id");
let pokemonWeight = document.getElementById("weight");
let pokemonHeight = document.getElementById("height");
let imgContainer = document.getElementById("img-container");
let pokemonHp = document.getElementById("hp");
let pokemonAttack = document.getElementById("attack");
let pokemonDefense = document.getElementById("defense");
let pokemonSpecialAttack = document.getElementById("special-attack");
let pokemonSpecialDefense = document.getElementById("special-defense");
let pokemonSpeed = document.getElementById("speed");

/* fetch(apiurl)
    .then(res => {
        if(!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
    }) */