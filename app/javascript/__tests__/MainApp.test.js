import MainApp from '../components/MainApp'
import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Renders a LEARN welcome', ()=>{
const mainApp = shallow(<MainApp />)
console.log(mainApp.find('#hidden-gem-link'))
console.log(mainApp.find('#hidden-gem-link').html())
  expect(mainApp.find('#hidden-gem-link').text()).toEqual('Hidden Gem')
})

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div)
});
