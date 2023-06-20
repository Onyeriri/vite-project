
import { createContext, useContext } from 'react';
import propTypes from 'prop-types'
import { useState } from 'react';

export const GlobalContext = createContext();
export const useAppContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <GlobalContext.Provider value={{count, handleCount}}>
            {children}
        </GlobalContext.Provider>
  )
}

AppContext.propTypes = {
    children: propTypes.element.isRequired,
}

export default AppContext