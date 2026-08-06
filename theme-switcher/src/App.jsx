import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";
import { useEffect, useState, useCallback, useMemo } from "react";

function App() {
    const [themeMode, setThemeMode] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const changeTheme = useCallback(() => {
        setThemeMode((prevMode) => {
            const newTheme = prevMode === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }, []);

    const contextValue = useMemo(() => ({
        themeMode,
        changeTheme
    }), [themeMode, changeTheme]);

    useEffect(() => {
        const htmlPage = document.querySelector("html");
        htmlPage.classList.remove("light", "dark");
        htmlPage.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={contextValue}>
            <div className="flex flex-col min-h-screen items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
                <div className="w-full max-w-sm flex flex-col items-center gap-8">
                    <ThemeBtn />
                    <Card />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
