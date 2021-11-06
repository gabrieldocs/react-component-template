import React from 'react';

export default function WrapperView(props: any): React.ReactElement { 
    return(
        <div>
            <p>{JSON.stringify(props)}</p>
        </div>
    )
}