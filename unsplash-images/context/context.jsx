import { createContext, useContext, useState } from 'react';
import { icons } from '../src/components/icons/icons';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

// Check if the user is in dark mode
function isDarkModeEnabled() {
    const userOption = localStorage.getItem('dark-theme');

    // check if the user has saved an option on local storage
    if (userOption === null) {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return JSON.parse(localStorage.getItem('dark-theme'));
    
}

export const AppContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(isDarkModeEnabled());
    const [userInput, setUserInput] = useState('');
    const body = document.querySelector('body');

    // toggle between light and dark theme
    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        
        body.classList.toggle('dark-theme');
        localStorage.setItem('dark-theme', !isDarkTheme);
    }


    if (isDarkTheme) {
        body.classList.add('dark-theme');
    }

    return <GlobalContext.Provider
        value={
                {
                toggleDarkTheme,
                icons,
                isDarkTheme,
                userInput,
                setUserInput
                }
            }   
    >
        {children}
    </GlobalContext.Provider>
};
