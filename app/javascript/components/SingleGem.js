import React from 'react'
import MainApp from './MainApp'

const SingleGem = (props) => {

    const { id } = props.match.params

    return(

        <div>
            <h1>whats up</h1>
                <div>
                    {props.posts && <h1>{props.posts[id-1].event_name}</h1>}
                </div>
        </div>

        )
}

export default SingleGem
