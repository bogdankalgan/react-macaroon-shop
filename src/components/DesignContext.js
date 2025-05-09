import {createContext, useContext, useState} from "react";

const CreateDesignContext = createContext()

export const CreateDesignProvider = ({children}) => {
    const [amount, setAmount] = useState(null)
    const [baseCount, setBaseCount] = useState(null)
    const [basePrice, setBasePrice] = useState(null)
    const [selectedExtras, setSelectedExtras] = useState([])


    return (
        <CreateDesignContext.Provider value={{
            amount,
            setAmount,
            basePrice: Number(basePrice) || 0,
            setBasePrice,
            baseCount: Number(baseCount) || 0,
            setBaseCount,
            selectedExtras,
            setSelectedExtras,
        }}>
            {children}
        </CreateDesignContext.Provider>
    )
}

export const useCreateDesign = () => useContext(CreateDesignContext)