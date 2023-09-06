import "../../css/product.css";
import "../../css/Dashboard.css";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, UNSAFE_DataRouterStateContext } from "react-router-dom";
import ErrorPage from "../error/error";
import ProductsHTML from "./ProductsHTML";
import SomeProduct from "./SomeProduct";
import Header from "../header/header";



function Products() {
    const [element, setElement] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState();
    const [mainImage, setMainImage] = useState();

    useEffect(() => {
        const fetchdata = 'https://dummyjson.com/products';
        const fetchData = async () => {
            try {
                const product = await axios.get(fetchdata)
                setElement(product.data.products);
            } catch (error) {
                <ErrorPage />
            }
        };
        fetchData();
    }, []);


    function sortByLowestPrice(a, b) {
        return a.price - b.price;
    }

    function sortByhighestPrice(a, b) {
        return b.price - a.price;
    }

    function resetPrice(element) {
        return element.reverse();
    }

    function handleImageChange() {
        setMainImage();
    }

    function change(e) {
        const sortPrice = e.target.value;
        if (sortPrice === "lowest") {
            let newArrayLowestPrice = element.sort(sortByLowestPrice);
            setFilteredProducts(newArrayLowestPrice);
        } else if (sortPrice === "highest") {
            let newArrayHighestPrice = element.sort(sortByhighestPrice);
            setFilteredProducts(newArrayHighestPrice);
        } else {
            let resetArray = resetPrice(element);
            setFilteredProducts(resetArray);
        }
    };


    if (!element) return null;

    return (
        <>
            <div className="display-output">
                <Header />
                <h1>Products</h1>
                <div className="category">
                    <select onChange={(jas) => change(jas)}>
                        <option>Sort By</option>
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </div>
                <div className="wrapper">
                    {filteredProducts ? filteredProducts.map((product) => {
                        return (
                            <div className="show-column">
                                <ProductsHTML product={product} />
                            </div>
                        )
                    }
                    ) : (element.map((product) => {
                        return (
                            <div className="show-column">
                                <ProductsHTML product={product} />
                            </div>
                        )
                    })
                    )}
                </div>
            </div>
        </>
    )
}

export default Products;