import { createContext, use, useContext, useState, type ReactNode } from "react"


// const ThemeContext = createContext({
//     theme: "light",
//     toggleTheme: () => { },
// })

////const ThemeContext = createContext()

const ThemeContext = createContext(
    { isDarkMode: false,
      toggleTheme: () => {},
      colors: {
        background: "#fff",
        text: "#333",
        primary: "#007bff",
        secondary: "#6c757d",
      },
    }
)


// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    //const [theme, setTheme] = useState("light")
    const [isDarkMode, setIsDarkMode] = useState(false) 

    // const toggleTheme = () => {
    //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    // }

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


    // return (
    //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //         {children}
    //     </ThemeContext.Provider>
    // )

    return ( 
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>        
    )
    
}

// export const useTheme = () => {    
//     const context = ThemeContext
//     if (!context) {
//         throw new Error("useTheme must be used within a ThemeProvider")
//     }
//     return context
// }   

export const useTheme = () => useContext(ThemeContext)


