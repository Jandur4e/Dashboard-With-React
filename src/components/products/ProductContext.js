import { createContext, useState } from "react";
export const AddedToCartContext = createContext([""]);

function AddedToCartChange({ children }) {
    const [addToCart, setAddToCart] = useState([]);
    const countAdded = { addToCart, setAddToCart };

    return (
        <AddedToCartContext.Provider value={countAdded}>{children}</AddedToCartContext.Provider>
    )
}

export default AddedToCartChange;