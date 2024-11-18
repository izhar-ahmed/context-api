import { useTheme } from "./ThemeProvider"

function Button() {
    const {theme, toggleTheme} = useTheme()
    return (
        <div style={{backgroundColor: theme === 'dark' ? '' : 'black', height: '100vh'}}>
        <button onClick={toggleTheme}>
            Theme: {theme}
        </button>
        </div>
    )
}

export default Button