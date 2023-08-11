let offset = 0
const limit = 10



const pokemonOL = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadmore')
function loadpokemonItens(offset,limit){
    pokeApi.getpokemons(offset,limit).then((pokemonList =[])=>{ 
        const newHtml = pokemonList.map((pokemon)=>`
            <li class="pokemon ${pokemon.type}">
                <span class="number">#00${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        
                    </ol>
        
        
                    <img src="${pokemon.photo}"
                        alt=${pokemon.name}>
        
            </div>  
            
            </li>   
         `).join(' ')
        pokemonOL.innerHTML += newHtml
    })
} 
loadpokemonItens()
loadMoreButton.addEventListener('click',() =>{
    offset+=limit
    loadpokemonItens(offset,limit)
})
