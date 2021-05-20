import store from "./store";

const globalState = {
  moviesSearch: [],
  moviesFavorites: [],
  titleFavorites: "Новый список",
  searchLine: "",
  apikey: "183d4bbe",
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_SEARCH":
        return { ...state, searchLine: action.payload.textInput };

    case "GET_ADD_TO_MS":
        return {...state, moviesSearch: action.payload.arrayOfSearch};

    case "GET_TO_FAVORITE":
        const newMoviesFavorites =  state.moviesFavorites
        // if(action.payload.el.Title !== action.payload.Title || state.moviesFavorites == []) {
            newMoviesFavorites.push(action.payload.el);
            return {...state, moviesFavorites: newMoviesFavorites};
        // }
        

        default:
            return state
        
    
  }
  return globalState;
}
