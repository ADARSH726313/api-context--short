import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeStatus:"light",
    lightTheme:()=>{},
    darkTheme:()=>{},   
}) 

export const ThemeProvider = ThemeContext.Provider

export default  function useValue () {
     return  useContext(ThemeContext)
}