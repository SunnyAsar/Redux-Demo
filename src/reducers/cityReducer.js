const initialState = {
  cities: []
}


const cities = (state=initialState, action) =>{
  switch(action.type){
    case 'ADD':
      return{
        ...state,
        cities: [...state.cities, action.payload]
      }
    default:
      return initialState
  }
}


export default cities