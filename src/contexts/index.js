import { useState, createContext } from "react";


export const layoutContext = createContext({
    loading: false,
    setLoading: () => { },
    studentsData: [], setStudentsData: () => { },
});



function ContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [studentsData, setStudentsData] = useState()
    return (
        <layoutContext.Provider value={{
            loading, setLoading, studentsData, setStudentsData
        }}>{children}</layoutContext.Provider>
    )
}

export default ContextProvider;