import { useContext, createContext, useState } from 'react';

const ChangeGlobalStates = createContext();
const ChangeGlobalStatesProvider = ({ children }) => {
    const [globalState, setChangeGlobalState] = useState({
        currSlide: 0,
        productImageUrl: null,
    })

    return (
        <ChangeGlobalStates.Provider value={{ globalState, setChangeGlobalState }}>
            {children}
        </ChangeGlobalStates.Provider>
    )
}
export const useGlobalStates = () => {
    return useContext(ChangeGlobalStates)
};

export default ChangeGlobalStatesProvider;