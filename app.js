
const pokemon_form = document.getElementsByTagName('form')[0]
pokemon_form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = pokemon_form[0].value.toLowerCase();
    pokemonData(name)
})

const pokemon = document.querySelector('.pokemon_card')

const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    pokemon.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.sprites.other.home.front_default}" alt="Card image cap">
  <div class="card-body">
    <br>
    <p id="titles">${data.name}</p>
    <br>
    <p id="titles">${data.abilities[0].ability.name}</p>
    <br>
  </div>
</div>
    `
}