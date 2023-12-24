"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMoonStarsFill, PiSunBold } from "react-icons/pi";


function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-3xl border-0`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <PiMoonStarsFill  /> : <PiSunBold />}
        </button>
    );
}

export default ThemeSwitch
