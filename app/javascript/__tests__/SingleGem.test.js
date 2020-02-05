import SingleGem from '../components/SingleGem'
import React from 'react'
import ReactDOM from 'react-dom'

it ('renders without crashing', ()=> {
    const div = document.createElement('div')
    ReactDOM.render(<SingleGem /> ,div)
})
