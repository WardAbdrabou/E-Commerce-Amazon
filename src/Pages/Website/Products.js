
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/Product-slice";
import CardProduct from "../../Components/CardProduct";

export default function Products() {

    const products = useSelector((state) => state.products);
    // console.log(products);
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            <div>
                <div className="cards" id="cards">
                    <div>
                        <div className="con">
                            {products.map((product, index) => {
                                return (
                                <div key={product.id}>
                                    <CardProduct product={product} showButton={true} />
                                </div>

                            );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
