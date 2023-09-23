let offset = 0
const limit = 10
const maxRecord = 151



const pokemonOL = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadmore')

function loadpokemonItens(offset,limit){
    pokeApi.getpokemons(offset,limit).then((pokemonList =[])=>{ 
        
        const newHtml = pokemonList.map((pokemon)=>`
        <a href="page2.html"> <li class="pokemon ${pokemon.type}">
                
                <span class="number">#${pokemon.number}</span>
                <span class=>${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        
                    </ol>
        
        
                    <img src="${pokemon.photo}"
                        alt=${pokemon.name}>
        
            </div>  
            
            </li> 
        </a>
         `).join(' ')
        pokemonOL.innerHTML += newHtml   
        
        
    })
} 

loadpokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit
    
    if (qtdRecordsWithNexPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadpokemonItens(offset, newLimit)
    
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadpokemonItens(offset, limit)
    }
    })
