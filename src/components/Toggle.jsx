import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Switcher from "../Switcher";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex gap-2 dark:bg-otherColor ">
      <button onClick={changeTheme}>
        {darkMode ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-900" />
        )}
      </button>
      <div className="font-bold" onClick={changeTheme}>
        {darkMode ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>}
      </div>
    </div>
  );
}
