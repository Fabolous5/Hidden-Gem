import React from 'react'
import ReactDOM from 'react-dom'
import EditPost from '../components/EditPost'

it ('renders without crashing', () =>{
    const div = document.createElement('div')
    ReactDOM.render(< EditPost /> ,div)
} )
