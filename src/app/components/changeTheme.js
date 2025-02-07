import { useState } from "react"

changeTheme = () =>{
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    changeValueTheme = () =>{
        setTheme(theme == 'light' ? 'dark' : 'light');
    }
    <button onClick={changeValueTheme}>
        {theme == 'light' ? }
    </button>
}
export default changeTheme