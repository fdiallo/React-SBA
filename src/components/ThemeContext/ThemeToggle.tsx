import { useTheme } from "./ThemeContext";


const ThemeToggle = () => {
    // const { theme, toggleTheme } = useContext(ThemeContext);
    const { isDarkMode, toggleTheme } = useTheme()

    // return (
    //     <button onClick={toggleTheme} className="theme-toggle">
    //         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    //     </button>
    // );

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <label style={{ marginRight: '10px' }}>
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </label>
        </div>
    )
};

export default ThemeToggle;