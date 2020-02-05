
import MainApp from '../components/MainApp'
import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Renders a LEARN welcome', ()=>{
const mainApp = mount(<MainApp />)
console.log(mainApp.find('#hidden-gem-link'))
  expect(mainApp.find('#hidden-gem-link').first().text()).toEqual('Hidden Gem')
})





it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div)
});
