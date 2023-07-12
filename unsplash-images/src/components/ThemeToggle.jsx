import React from 'react'
import { useGlobalContext } from '../../context/context';

const ThemeToggle = () => {
  const { toggleDarkTheme, icons, isDarkTheme } = useGlobalContext();
  
  return (
      <div className='toggle-container'>
      <button
        className={isDarkTheme ? 'dark-toggle toggle-btn' : 'toggle-btn'}
        onClick={toggleDarkTheme}
        type='button'
      >
          {isDarkTheme ? icons.moon : icons.sun }
      </button>
    </div>
  )
}

export default ThemeToggle