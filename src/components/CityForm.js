import React from 'react'

import { connect } from 'react-redux'
import { AddCity } from '../actions/citiesAction'

class CityForm extends React.Component {

  state = {
    city: ''
  } 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.PostCity(this.state.city)
    this.setState({
      city: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
          <input name='city' placeholder='enter a city name' value={this.state.city} onChange={this.handleChange} />
      </form>
    )
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    PostCity: (data) => dispatch(AddCity(data))
  }
}

export default  connect(null, mapDispatchToProps)(CityForm)