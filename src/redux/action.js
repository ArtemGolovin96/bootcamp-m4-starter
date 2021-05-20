
export function searchLineChangeHandlerAction(textInput) {
 
    return {
        type: "CHANGE_INPUT_SEARCH",
        payload: {
            textInput
        }
    }
}

export function addTomoviesSearchAfterAxiosGet(arrayOfSearch) {
    return {
        type: "GET_ADD_TO_MS",
        payload: {
            arrayOfSearch
        }
    }
}

export function addtoFavoriteAction(el) {
    return {
        type: "GET_TO_FAVORITE",
        payload: {
            el
        }
    }
}