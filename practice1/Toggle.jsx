import React, { useState } from "react";

function Toggle() {
    const [isDark, setIsDark] = useState(false);

    const changer = () => {
        setIsDark(prev => !prev);
    };

    return (
        <>
            <div className={isDark ? "w-screen h-screen bg-gray-900 text-white items-center justify-center" : "w-screen h-screen bg-white text-gray-900 items-center justify-center"}>
                <div className="text-center p-6">
                    <h2 className="mb-4 text-xl font-semibold">{isDark ? "Dark Mode" : "Light Mode"}</h2>
                    <button
                        onClick={changer}
                        className="px-4 py-2 rounded bg-blue-500 text-white hover:opacity-90 transition"
                    >
                        Toggle Theme
                    </button>
                </div>
            </div>
        </>
    );
}

export default Toggle;