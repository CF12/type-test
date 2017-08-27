import React from 'react'
import gstyles from '../../../components/gstyles.jsx'
let words = require('../../../components/wordlist.json').words

function shuffleArray (array) {
  let m = array.length
  let t, i

  while (m) {
    i = Math.floor(Math.random() * m--)

    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

export default class WordDisplay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pending_words: shuffleArray(words),
      past_words: []
    }

    this.store = props.store || undefined
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        height: '50px',
        justifyContent: 'space-between',
        fontSize: '48px'
      }}>
        <p>{words[0]}</p>
        <p>{words[0]}</p>
        <p>{words[0]}</p>
        <p>{words[1]}</p>
        <p>{words[2]}</p>
      </div>
    )
  }
}
