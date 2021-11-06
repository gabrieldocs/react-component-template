import WrapperApi from "./WrapperApi";

export function getPokemon<Type>(name: Type) {
    return WrapperApi.get(`/pokemon/${name}`)
}

export function getAllPokemons() { 
    return WrapperApi.get('/pokemon?limit=5&offset=236')
}