import React from 'react'
import gstyles from '../../../components/gstyles.jsx'

export default class InputBox extends React.Component {
  constructor (props) {
    super(props)

    this.store = props.store || undefined
  }

  handlerKeyDown (event) {
    if (event.keyCode === 32) {
      // if (this.inputBox.value === this.state.)
    }
  }

  clearInputBox () {
    this.inputBox.value = ''
  }

  render () {
    return (
      <div>
        <input
          style={{
            left: '50%',
            width: '50%',
            height: '90px',
            fontSize: '90px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: 'none',
            outline: 'none' }}
          onKeyPress={this.handlerKeyDown}
          ref={(instance) => { this.inputBox = instance }}
        />
      </div>
    )
  }
}
