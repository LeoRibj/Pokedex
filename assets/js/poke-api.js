const pokeApi = {}

function convertpokeapidet(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name= pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types =types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonsDetails = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response => response.json()))
        .then(convertpokeapidet)


        }


pokeApi.getpokemons = (offset=0,limit=10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) =>jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsdeails)=> pokemonsdeails)
        .catch((errror)=> console.error(error))


}


