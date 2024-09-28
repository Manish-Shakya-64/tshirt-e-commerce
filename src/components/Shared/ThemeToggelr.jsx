import { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

const  ThemeToggler = () =>{
  const [theme, setTheme] = useState(() => {
    // Load the saved theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Update the theme on the document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2 text-black dark:text-white">
        {theme === 'dark' ? <IoSunny /> : <FaMoon />}
    </button>
  );
}


export default ThemeToggler;