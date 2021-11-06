import React, { useEffect, useState } from 'react'
import { getUser } from './Card.service'
import CardView from './Card.view'


export default function Card(): React.ReactElement {
  const [username, setUsername] = useState<string>('lucgbrl')
  const [githubUser, setGithubUser] = useState<string|null|undefined>('gabrieldocs')
    useEffect(()=>{
        getUser(username)
            .then(response => response)
            .then(user => setGithubUser(user))
    },[username]) 
    return(
        <>
            <input 
                className= "search-field" 
                placeholder="username"
                onChange={(e)=>{setUsername(e.target.value)}}/>
            <CardView githubUser={githubUser}/>
        </>
    )
}