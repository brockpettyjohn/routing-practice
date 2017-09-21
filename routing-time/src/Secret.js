import React from 'react'


export default function Secret(props){
        return (
            <div>
                <p>Psssssst shhhhh!</p>
                <div>{props.children}</div>
            </div>
        )

    }
