import "../../css/product.css";
import "../../css/Dashboard.css";
import React, { useEffect, useState } from "react";
import ProductsHTML from "./ProductsHTML";
import useData from "./Usedata";



function Products() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryInput, setCategoryInput] = useState();
    // const category = useRef();
    const url = "https://dummyjson.com/products";
    const { data, error } = useData(url);

    useEffect(() => {
        const filteredProduct = data?.products.filter((product) => {
            return product.category == categoryInput;
        });
        setFilteredProducts(filteredProduct);
    }, [categoryInput]);
    console.log(data);

    if (!data) return null;
    const categoryArray = data?.products.map((category) => category.category);
    const reducedArray = [...new Set(categoryArray)];

    function sortByLowestPrice(a, b) {
        return a.price - b.price;
    }

    function sortByhighestPrice(a, b) {
        return b.price - a.price;
    }

    function resetPrice(data) {
        return data.reverse();
    }

    function change(e) {
        const sortPrice = e.target.value;
        if (sortPrice === "lowest") {
            let newArrayLowestPrice = data?.products.sort(sortByLowestPrice);
            setFilteredProducts(newArrayLowestPrice);
        } else if (sortPrice === "highest") {
            let newArrayHighestPrice = data?.products.sort(sortByhighestPrice);
            setFilteredProducts(newArrayHighestPrice);
        } else {
            let resetArray = resetPrice(data?.products);
            setFilteredProducts(resetArray);
        }
    };
    return (
        <div className="display-output">
            <h1>Products</h1>
            <div className="category">
                <label for='category' >Category</label>
                <select onChange={(e) => { setCategoryInput(e.target.value) }} name="category" defaultValue="select category">
                    <option value='select category' disabled>Select Category</option>
                    {reducedArray.map((someOption) => {
                        return <option value={someOption}>{someOption}</option>
                    })}
                </select>
                <select onChange={(jas) => change(jas)}>
                    <option>Sort By</option>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
                </select>
            </div>
            <div className="wrapper">
                {error ? (<p>Error</p>) : filteredProducts ? filteredProducts.map((product) => {
                    return <ProductsHTML product={product} />
                }
                )
                    :
                    (data.products.map((product) => {
                        return <ProductsHTML product={product} />
                    })
                    )}
            </div>
        </div>
    )
}

export default Products;