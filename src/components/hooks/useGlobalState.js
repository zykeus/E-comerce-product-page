import { useContext, createContext, useState, useRef } from 'react';

const ChangeGlobalStates = createContext();
const ChangeGlobalStatesProvider = ({ children }) => {
    const [globalState, setChangeGlobalState] = useState({
        currSlide: 0,
        productImageUrl: null,
    })

    const slideThumb = useRef([]);
    const slideProduct = useRef([]);

    return (
        <ChangeGlobalStates.Provider value={{ globalState, setChangeGlobalState, slideThumb, slideProduct }}>
            {children}
        </ChangeGlobalStates.Provider>
    )
}
export const useGlobalStates = () => {
    return useContext(ChangeGlobalStates)
};

export default ChangeGlobalStatesProvider;