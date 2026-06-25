import { useState, useCallback, useEffect, useRef } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // Function that generates the password
    const passwordGenerator = useCallback(() => {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (numberAllowed) {
            chars += "123456";
        }

        if (specialCharAllowed) {
            chars += "!@#$%^&*(){}[]+?~";
        }

        let pass = "";
        let randomNumber;
        for (let i = 0; i < length; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            pass += chars[randomNumber];
        }

        setPassword(pass);
    }, [length, numberAllowed, specialCharAllowed, setPassword]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

    const passwordRef = useRef(null);
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-4">
            <div className="w-full max-w-xl bg-gray-800/80 backdrop-blur rounded-2xl shadow-2xl border border-gray-700 p-6">
                <h1 className="text-3xl font-bold text-center text-white mb-6">
                    Password Generator
                </h1>

                {/* Password Output */}
                <div className="flex overflow-hidden rounded-xl shadow-lg mb-8">
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        ref={passwordRef}
                        readOnly
                        className="w-full bg-gray-100 text-gray-800 px-4 py-3 outline-none font-medium"
                    />

                    <button
                        onClick={copyPasswordToClipboard}
                        className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white px-5 font-semibold"
                    >
                        Copy
                    </button>
                </div>

                {/* Controls */}
                <div className="space-y-6">
                    {/* Length */}
                    <div>
                        <div className="flex justify-between text-white mb-2">
                            <span>Password Length</span>
                            <span className="font-bold text-orange-400">
                                {length}
                            </span>
                        </div>

                        <input
                            type="range"
                            min={8}
                            max={30}
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full cursor-pointer accent-orange-500"
                        />
                    </div>

                    {/* Checkboxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="flex items-center gap-3 bg-gray-700 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-600 transition">
                            <input
                                type="checkbox"
                                checked={numberAllowed}
                                onChange={() =>
                                    setNumberAllowed((prev) => !prev)
                                }
                                className="w-5 h-5 accent-orange-500"
                            />

                            <span className="text-white">Include Numbers</span>
                        </label>

                        <label className="flex items-center gap-3 bg-gray-700 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-600 transition">
                            <input
                                type="checkbox"
                                checked={specialCharAllowed}
                                onChange={() =>
                                    setSpecialCharAllowed((prev) => !prev)
                                }
                                className="w-5 h-5 accent-orange-500"
                            />

                            <span className="text-white">
                                Special Characters
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
