import store from "./store";

const globalState = {
  moviesSearch: [],
  moviesFavorites: [],
  titleFavorites: "Новый список",
  searchLine: "",
  apikey: "183d4bbe",
  textValueAddToFavoriteButton: false,
  moviesIdPostAxiosFavoritesARRay: [],
  copy: false,
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_SEARCH":
        return { ...state, searchLine: action.payload.textInput };

    case "GET_ADD_TO_MS":
        return {...state, moviesSearch: action.payload.arrayOfSearch};

    case "GET_TO_FAVORITE":
        const newMoviesFavorites = [...state.moviesFavorites];
        let flag = newMoviesFavorites.filter((el) => el.imdbID == action.payload.id);
        if(flag.length == 0) {
            newMoviesFavorites.push(action.payload.el);
            return {...state, moviesFavorites: newMoviesFavorites};
        }
        
    case "DELETE_FROM_FAV":
      const newMoviesFavoritesDel = [...state.moviesFavorites];
      const newArr = newMoviesFavoritesDel.filter((el) => el.imdbID !== action.payload.id);
      console.log(newArr, 'reducer');
      return {...state, moviesFavorites: newArr};
    
    case "DELETE_BUTTON_FROM_FAV_TRUE":
      return {...state, textValueAddToFavoriteButton: true };
    
    case "DELETE_BUTTON_FROM_FAV_FALSE":
      return {...state, textValueAddToFavoriteButton: false };
    
    case "FAVORITE_LIST_INPUT_SEARCH":
      return { ...state, titleFavorites: action.payload.textInput };

    case "POST_AXIOS_FAVORITE_LIST":
      const arrListOfFavorites = [...state.moviesIdPostAxiosFavoritesARRay];
      arrListOfFavorites.push(action.payload.elObjAxiosPostNewList);
      return {...state, moviesIdPostAxiosFavoritesARRay:arrListOfFavorites};

    case "COPY_FAVORITE_LIST":
      return {...state, copy: true}
    default: 
            return state
        
    
  }
  return globalState;
}
