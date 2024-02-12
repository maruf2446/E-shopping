import React from 'react'
import Darkbutton from "../assets/img/website/dark-mode-button.png"
import Litebutton from "../assets/img/website/light-mode-button.png"

function DarkMood() {

    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    React.useEffect(()=> {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem("theme", 'light')
        }
    }, [theme]);

  return (
    <div className='relative'>
        <img src={Litebutton} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} `} alt="" />

        <img src={Darkbutton} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' alt="" />
    </div>
  )
}

export default DarkMood