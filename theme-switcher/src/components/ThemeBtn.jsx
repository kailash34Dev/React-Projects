import useTheme from "../contexts/theme";

function ThemeBtn() {
    const { themeMode, changeTheme } = useTheme();
    const isDark = themeMode === "dark";

    return (
        <label className="flex flex-col items-center justify-center gap-2.5 cursor-pointer group">
            {/* Toggle Container */}
            <div className="relative inline-flex items-center">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={changeTheme}
                    checked={isDark}
                />

                {/* Track */}
                <div className="w-16 h-8 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300/50 dark:peer-focus:ring-indigo-800/50 rounded-full peer dark:bg-slate-700 transition-all duration-500 shadow-inner group-hover:shadow-md"></div>

                {/* Thumb */}
                <div
                    className={`absolute top-1 left-1 bg-white dark:bg-slate-800 rounded-full h-6 w-6 transition-all duration-500 shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center overflow-hidden ${isDark ? "translate-x-8" : "translate-x-0"}`}
                >
                    {/* Sun icon */}
                    <svg
                        className={`absolute w-3.5 h-3.5 text-amber-500 transition-all duration-500 transform ${isDark ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                    </svg>

                    {/* Moon icon */}
                    <svg
                        className={`absolute w-3.5 h-3.5 text-indigo-400 transition-all duration-500 transform ${isDark ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                </div>
            </div>

            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 transition-colors duration-500 select-none">
                {isDark ? "Dark Mode" : "Light Mode"}
            </span>
        </label>
    );
}

export default ThemeBtn;
