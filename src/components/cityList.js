import React from 'react'
import { connect } from 'react-redux'
import cities from '../reducers/cityReducer'


class CityList extends React.Component {
  render(){
    return(
      <div>
        <h2>Cities</h2>
        <ul>
          {this.props.cities.map((city,index) =>{
            return <li key={index}>{city}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cities: state.Cities.cities
  }
}


export default connect(mapStateToProps, null)(CityList)