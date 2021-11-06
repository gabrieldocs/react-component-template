import React, { useEffect, useState } from 'react';
import {getPokemon, getAllPokemons} from './WrapperService';
import WrapperView from "./WrapperView";

export default function Wrapper(): React.ReactElement { 
    const [pokemon, setPokemon] = useState<null|any>(null)
    useEffect(()=>{
        getPokemon<string>('lucario')
            .then(response => response.data)
            .then(response => console.log(response))
        getAllPokemons()
            .then(response => response.data)
            .then(response => setPokemon(response))
        
    },[])
    return <WrapperView props={pokemon}/>
}