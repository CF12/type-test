import React from 'react'
import '../../components/reset.css'

export default class ScreenHome extends React.Component {
  constructor () {
    super()



  }

  

  render () {
    return (
      <div>
        <div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: 'cyan'}}>
          <p style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>testing</p>
        </div>
      </div>
    )
  }
}
