const pkmName = document.querySelector('.poke_num');
const pkmNumber = document.querySelector('.poke_name');
const pkmGif = document.querySelector('.pokemon');
const form = document.querySelector('form');
const input = document.querySelector('.input__search');


const fetchPokemon = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await API.json();
    return data;

}

const renderPkm = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    pkmName.innerHTML = data.name;
    pkmNumber.innerHTML = data.id;
    pkmGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
}

renderPkm(1)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPkm(input.value.toLowerCase());
});