import { useTheme } from "./ThemeContext";

/**
 * ThemeToggle component provides a user interface for toggling between light and dark themes. 
 * It uses the useTheme hook to access the current theme state and the toggleTheme function from the ThemeContext. 
 * The component renders a checkbox that allows users to switch between light and dark modes, and it displays the current mode as text next to the checkbox.
 */
const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme()

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