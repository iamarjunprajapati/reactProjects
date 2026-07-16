import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useTheme, { ThemeContextProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

   useEffect(() => { 
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
        console.log(themeMode)

    }, [themeMode])


  return (

    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeContextProvider>
  )
}

export default App
