import React from 'react'
import '../../components/reset.css'
import keydown from 'react-keydown'
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
      this.setState({current_key: keydown.event.key})
    }
  }

  render () {
    return (
      <div>
        <div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: 'cyan'}}>
          <p style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{this.state.current_key}</p>
        </div>
      </div>
    )
  }
}
