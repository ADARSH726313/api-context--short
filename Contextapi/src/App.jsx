import {  useEffect, useState } from 'react'
import { ThemeProvider } from './Context/Contextapi'
import Card from './Component/Card'

import Themebtn from './Component/Themebtn'


function App() {
  
 const [themeStatus,setThemeStatus] = useState("light")
 const lightTheme = ()=>{
  setThemeStatus("light")
 }
 const darkTheme = ()=>{
  setThemeStatus("dark")
 }
 useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark")
  document.querySelector("html").classList.add(themeStatus)
 },[themeStatus])

  return (
   
    <ThemeProvider value={{themeStatus, lightTheme,darkTheme}}>
 <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
    
    </ThemeProvider>
      
   
  )
}

export default App
