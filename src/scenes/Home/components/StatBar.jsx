import React from 'react'

export default class StatBar extends React.Component {
  constructor (props) {
    super(props)

    this.setState({
      currentWpm: 0
    })
  }

  render () {
    return (
      <div>
        <p>{this.state.currentWpm}</p>
      </div>
    )
  }
}
