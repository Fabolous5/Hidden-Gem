import UserProfile from '../components/UserProfile'
import React from 'react'
import ReactDOM from 'react-dom'

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(< UserProfile/> , div)
})
