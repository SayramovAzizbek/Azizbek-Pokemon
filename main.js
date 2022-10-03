let pokemonList = document.querySelector(".pokemon-list");

let pokemonfragment = new DocumentFragment();
let pokemonTemplate = document.querySelector(".pokemon-template").content;

for (let pokemon of pokemons) {
  var clonePokemonTemplate = pokemonTemplate.cloneNode(true);

  clonePokemonTemplate.querySelector(".pokemon-item");
  clonePokemonTemplate.querySelector(".pokemon-title").textContent =
    pokemon.name;
  clonePokemonTemplate.querySelector(".pokemon-img").src = pokemon.img;
  clonePokemonTemplate.querySelector(".pokemon-candy").textContent =
    pokemon.candy;
  clonePokemonTemplate.querySelector(".pokemon-span-time").textContent =
    pokemon.spawn_time;
  clonePokemonTemplate.querySelector(".pokemon-num").textContent = pokemon.num;

  pokemonfragment.appendChild(clonePokemonTemplate);
}
pokemonList.appendChild(pokemonfragment);
