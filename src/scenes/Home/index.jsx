import React from 'react'
import '../../components/reset.css'
import keydown from 'react-keydown'
import { createStore } from 'redux'
import InputBox from './components/InputBox.jsx'
import WordDisplay from './components/WordDisplay.jsx'

import gstyles from '../../components/gstyles.jsx'
const $ = require('jquery')

@keydown
export default class ScreenHome extends React.Component {
  constructor () {
    super()

    this.state = {
      current_key: ''
    }
  }

  componentWillReceiveProps ({ keydown }) {
    if (keydown.event) {
      // this.setState({current_key: keydown.event.key})
    }
  }

  render () {
    return (
      <div>
        <div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: 'cyan'}}>
          <div style={Object.assign(gstyles.flex_center_center, {flexDirection: 'column'})}>
            <WordDisplay />
            <InputBox />
          </div>
        </div>
      </div>
    )
  }
}
