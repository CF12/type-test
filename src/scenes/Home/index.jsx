import React from 'react'
import '../../components/reset.css'
import keydown from 'react-keydown'
import { createStore } from 'redux'
import InputBox from './components/InputBox.jsx'
import WordDisplay from './components/WordDisplay.jsx'

import gstyles from '../../components/gstyles.jsx'
const $ = require('jquery')

export default class ScreenHome extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#525252',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center' }}
      >
        <WordDisplay />
        <InputBox />
      </div>
    )
  }
}
