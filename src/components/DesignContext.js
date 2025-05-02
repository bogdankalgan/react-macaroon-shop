import {createContext, useContext, useState} from "react";

const CreateDesignContext = createContext()

export const CreateDesignProvider = ({children}) => {
    const [amount, setAmount] = useState(null)
    const [baseCount, setBaseCount] = useState(null)
    const [basePrice, setBasePrice] = useState(null)


    return (
        <CreateDesignContext.Provider value={{amount, setAmount, basePrice, setBasePrice, baseCount, setBaseCount}}>
            {children}
        </CreateDesignContext.Provider>
    )
}

export const useCreateDesign = () => useContext(CreateDesignContext)