import { createContext, useContext } from "react";

// Context creation
const themeContext = createContext({
    themeMode: "light",
    changeTheme: () => {},
});

// Context provider
export const ThemeProvider = themeContext.Provider;

// Custom hook
export default function useTheme() {
    return useContext(themeContext);
}
