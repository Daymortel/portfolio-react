import React from 'react' 

import Avatar from '../images/avatar.jpg'

export const Header = () => {

    const [theme, setTheme] = React.useState(localStorage.getItem('theme'))

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const toggleIcon = () => {
        const mode = document.querySelector('.mode')
        if (theme === 'light') {
                mode.classList.remove("bi-brightness-high")
                mode.classList.add("bi-moon")
        } else {
                mode.classList.remove("bi-moon")
                mode.classList.add("bi-brightness-high")
        }
    }

    React.useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.className = theme
        toggleIcon(theme)
    }, [theme])

    return (
        <>
            <header>
                <div className="sidebar">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    <nav className="menu">
                        <label className="logo"><a href="/"><img src={Avatar} alt="Avatar"></img></a></label>
                        <button className="mode" onClick={toggleTheme}>{toggleIcon}</button>
                        <ul id="menu">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="https://daymortel.fr.nf/forum" target="_blank">Forum</a></li>
                        </ul>
                    </nav>
                </div> 
            </header>
        </>
    )
}