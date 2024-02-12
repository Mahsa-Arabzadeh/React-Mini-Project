import { Component } from 'react'
import "./Temp.css"

class Temp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      temp: 10,
      tempClass: "cold",
    }

    this.addToTemp = this.addToTemp.bind(this)
    this.minusToTemp = this.minusToTemp.bind(this)
  }

  addToTemp(){
    if(this.state.temp >= 30){
      return false
    }

    this.setState(prevState => {
      return {
        temp: prevState.temp + 1}
    })

    if(this.state.temp >= 15){
     this.setState({tempClass: "hot"})
    }
  }

  minusToTemp(){
    if(this.state.temp <= 0){
      return false
    }

    this.setState(prevState => {
      return {temp: prevState.temp - 1}
    })

    if(this.state.temp <= 15){
      this.setState({tempClass: "cold"})
    }
  }

  render() {
    return (
      <div className='app-container'>
        <div className='temprature-display-container'>
            <div className={`temprature-display ${this.state.tempClass}`}>
                {this.state.temp}C
            </div>
        </div>
        <div className="button-container">
            <button onClick={this.addToTemp}>+</button>
            <button onClick={this.minusToTemp}>-</button>
        </div>
      </div>
    )
  }
}

export default Temp
