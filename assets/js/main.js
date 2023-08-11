offset = 0
limit = 10

function converthtml(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#00${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}

            </ol>


            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt=${pokemon.name}>

    </div>  
    
    </li>   
`
}


const pokemonOL = document.getElementById('pokemonList')
 
pokeApi.getpokemons().then((pokemonList =[])=>{ 
    const newHtml = pokemonList.map(converthtml).join('')
    pokemonOL.innerHTML = newHtml

})