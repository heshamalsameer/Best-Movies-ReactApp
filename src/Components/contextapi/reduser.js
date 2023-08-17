import * as actions from './ActionTypes';
import { initialstate } from './Context';

export const reduser = (state = initialstate,action) => {
    switch (action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST :
            return {
                ...state,
                watchList:[...state.watchList,action.movie]
            }
            case actions.ADD_MOVIE_TO_WATCHED :
                return {
                    ...state,
                    watchList: state.watchList.filter ((movie) => movie.imdbID !== action.movie.imdbID),
                    watched : [...state.watched,action.movie]
                }    
            case actions.REMOVE_MOVIE_FROM_WATCHLIST :
                return {
                    ...state,
                    watchList: state.watchList.filter ((movie) => movie.imdbID !== action.movie.imdbID)
                }    
            case actions.MOVE_TO_WATCHLIST :
                return {
                    ...state,
                    watched: state.watched.filter ((movie) => movie.imdbID !== action.movie.imdbID),
                    watchList:[...state.watchList,action.movie]
                }    
            case actions.REMOVE_MOVIE_FROM_WATCHED :
                return {
                    ...state,
                    watched: state.watched.filter ((movie) => movie.imdbID !== action.movie.imdbID)
                }    
            default :
            return state
    }
}
