// Fetch data for a specific Pokemon
const getPokemonData = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Log the fetched data
    displayPokemonData(data);
};

// Display data for a specific Pokemon
function displayPokemonData(data) {
    const displayArea = document.getElementById('display-area');
    displayArea.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
    `;
}

// Event listener for the search bar
document.getElementById('search-button').addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    const pokemonName = searchBar.value.toLowerCase();
    getPokemonData(pokemonName);
});