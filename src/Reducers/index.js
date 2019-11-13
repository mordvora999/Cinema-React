import { combineReducers } from 'redux';

// reducers
export const initialState = {
    movies: [] , 
    selectedMovie: {},
    loading: true
    
  };

  export const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "SEARCH_MOVIES_REQUEST":
        return {
          ...state,
          loading: true
        };
      case "SEARCH_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload
        };
      case "SEARCH_MOVIES_FAILURE":
        return {
          ...state,
          loading: false
        };
        case "MOVIE_SELECTED":
            return {
              ...state,
              loading: false,
              selectedMovie: action.payload
            };
         case "MOVIE_DELETED":
            return {
              ...state,
              loading: false,
              selectedMovie: action.payload
          };
      default:
        return state;
    }
};


  
const rootReducer = combineReducers({
  reducer
});

export default rootReducer;

// const movieReducer = () => {
//     return [
          
//     ]
// }

// const selectedMovieReducer = (selectedSong = null , action) => {
//     if(action.type === "SONG_SELECTED"){
//         return action.payload;
//     }
//     return selectedSong;
// }


// export default combineReducers({
//     movies: movieReducer , 
//     selectedMovie: selectedMovieReducer
//  })