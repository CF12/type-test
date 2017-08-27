import React from 'react'
import gstyles from '../../../components/gstyles.jsx'
let words = require('../../../components/wordlist.json').words

function shuffleArray (array) {
  array = array.slice()
  let result = []
  for (let i = 0; i < array.length; i++) {
    let n = Math.floor(Math.random * array.length)
    console.log(i)
    result.push(array[n])
    array.splice(n, 1)
  }

  setTimeout(() => {
    return result
  }, 2000)
}

export default class WordDisplay extends React.Component {
  constructor (props) {
    super(props)

    this.store = props.store || undefined
    shuffleArray(words)
  }

  render () {
    return (
      <div style={{
        display: 'absolute',
        position: 'flex',
        width: '100%',
        height: '50px',
        fontSize: '48px'
      }}>
        <span>
          <p>{words[Math.floor(Math.random() * words.length)]}</p>
          <p>{words[Math.floor(Math.random() * words.length)]}</p>
          <p>{words[Math.floor(Math.random() * words.length)]}</p>
          <p>{words[Math.floor(Math.random() * words.length)]}</p>
          <p>{words[Math.floor(Math.random() * words.length)]}</p>
        </span>

      </div>
    )
  }
}
