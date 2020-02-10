import React from "react"
import { Link } from 'react-router-dom'

const SingleGem = () => {
    const cardWidth = {"widht": "400px"}
    const { id } = props.match.params
    const post = props.posts.find((post) => post.id == parseInt(id))

    return(
        <div className="container">
            <div className="row">
            <h1>this is where ONLY one Gem will be displayed</h1>
            </div>
        </div>
    )
}

export default SingleGem
