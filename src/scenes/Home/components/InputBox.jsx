import React from 'react'
import gstyles from '../../../components/gstyles.jsx'

export default class InputBox extends React.Component {
  constructor (props) {
    super(props)

    this.store = props.store || undefined
  }

  handlerKeyDown (event) {
    console.log(event.key)
  }

  render () {
    return (
      <div>
        <input
          style={{
            width: '100%',
            height: '90px',
            fontSize: '90px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: 'none',
            outline: 'none' }}
          onKeyPress={this.handlerKeyDown}
        />
      </div>
    )
  }
}
