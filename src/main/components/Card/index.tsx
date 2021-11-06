import React, { useEffect, useState } from 'react'
import { getUser } from './Card.service'
import CardView from './Card.view'


export default function Card(username: string): React.ReactElement {
    const [user, setUser] = useState<any|null>({
        user:{
            login: '',
            bio: '',
            url: '',
            html_url: ''
        }
    })
    useEffect(()=>{
        getUser(username? username : 'gabrieldocs')
            .then(response => response)
            .then(data => console.log(data))
            // .then(user => setUser(user))
    },[]) 
    return(
        <CardView user={user} />
    )
}