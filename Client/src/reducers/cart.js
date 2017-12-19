export default function reducer(state={
  spots: [],
}, action) {
  switch (action.type) {
    case "ADD_SPOTTOCART": {
      return {
        ...state, 
        spots: [...state.spots, action.payload]
      }
    }
  }
  return state
}