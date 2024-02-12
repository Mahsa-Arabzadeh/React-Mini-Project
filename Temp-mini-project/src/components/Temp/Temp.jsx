import { Component } from 'react'
import "./Temp.css"

class Temp extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className='temprature-display-container'>
            <div className='temprature-display cold'>
                10C
            </div>
        </div>
        <div className="button-container">
            <button>+</button>
            <button>-</button>
        </div>
      </div>
    )
  }
}

export default Temp
