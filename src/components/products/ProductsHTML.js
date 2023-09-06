import { useContext, useState } from "react";
import Images from "./Images";
import SomeProduct from "./SomeProduct";

function ProductsHTML({ product }) {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [thisProduct, setThisProduct] = useState([]);


    function openModal(product) {
        setOpenPopUp(true);
        setThisProduct(product);
    };


    return (

        <div className="product-box">
            {openPopUp && thisProduct && <SomeProduct setOpenPopUp={setOpenPopUp} someProduct={thisProduct} />}
            <div>
                <button onClick={() => openModal(product)} className="button-modal" >View About Product</button>
            </div>
            <div className="product" key={product.id}>
                <p><b>Brand:</b> {product.brand}</p>
                <p><b>Title:</b> {product.title}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>Price:</b> {product.price} $</p>
            </div>
            <Images product={product} />
        </div>
    )
}

export default ProductsHTML;