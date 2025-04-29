import {createContext, useContext, useState} from "react";

const CreateDesignContext = createContext()

export const CreateDesignProvider = ({children}) => {
    const [amount, setAmount] = useState(null)

    return (
        <CreateDesignContext.Provider value={{amount, setAmount}}>
            {children}
        </CreateDesignContext.Provider>
    )
}

export const useCreateDesign = () => useContext(CreateDesignContext)