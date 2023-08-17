import React, {createContext,useContext,useEffect,useReducer} from 'react'
import { reduser } from './reduser';

export const initialstate = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
    moviedispatch:React.DispatchWithoutAction
  }

export const GlobalContext = createContext(initialstate);

export const Context = ({children}) => {

  const [state,dispatch] = useReducer(reduser,initialstate);
  useEffect(() => {
    localStorage.setItem('watchList',JSON.stringify(state.watchList));
    localStorage.setItem('watched',JSON.stringify(state.watched));
  },[state])
  return (
    <GlobalContext.Provider value={{
      watchList:state.watchList,
      watched:state.watched,
      moviedispatch: dispatch
    }}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useMovieContext = () => {
  return useContext(GlobalContext);
}