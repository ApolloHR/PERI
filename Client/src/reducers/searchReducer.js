export default function searchReducer(state={
  search: '',
}, action) {
  switch (action.type) {
    case 'SEARCH_INPUT': {
      return {...state, search: action.payload};
    }
  }
  return state;
}