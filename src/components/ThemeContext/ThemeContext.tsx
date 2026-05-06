import { createContext, use, useContext, useState, type ReactNode } from "react"

// Define the shape of the theme context, including the current theme state and a function to toggle the theme.
const ThemeContext = createContext(
    {
        isDarkMode: false,
        toggleTheme: () => { },
        colors: {
            background: "#fff",
            text: "#333",
            primary: "#007bff",
            secondary: "#6c757d",
        },
    }
)

/**
 * ThemeProvider component is responsible for managing the theme state and providing it to the rest of the application. 
 * It uses the useState hook to manage the isDarkMode state, which determines whether the dark mode is enabled or not. 
 * The toggleTheme function toggles the value of isDarkMode between true and false. 
 * The theme object contains the current theme state and the colors for both light and dark modes. 
 * The ThemeProvider component wraps its children with the ThemeContext.Provider, passing down the theme object as the value.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => setIsDarkMode(prevMode => !prevMode)

    const theme = {
        isDarkMode,
        toggleTheme,
        colors: {
            background: isDarkMode ? "#333" : "#fff",
            text: isDarkMode ? "#fff" : "#333",
            primary: isDarkMode ? "#4a90e2" : "#007bff",
            secondary: isDarkMode ? "#6c757d" : "#6c757d",
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => useContext(ThemeContext)