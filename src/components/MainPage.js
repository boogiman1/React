import React, { useEffect } from "react";
import './MainPage.css';
import axios from "axios";
const Mainpage = () => {
    let [products, setProducts] = React.useState([]);
    useEffect(() => { //특정 모듈에 있는(위에 import react 한거 import React from "react";) 에서 useEffect를 불로 오는데 자동으로 {useEffect} 가 완성 된다
        axios.get("https://3c247217-7784-4082-a3a1-3469982f2385.mock.pstmn.io/products")
            .then((res) => {
                products = res.data.products;
                setProducts(products);
            })
            .catch((err) => {
                return console.log(err);
            });
    }, []);
    return (
        <>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="body">
                <div id="banner"><img src="images/banners/banner1.png" alt="" /></div><h2>Products</h2>
                <div id="product-list">
                    {products.map((product, idx) => {
                        /* console.log(product, idx); */
                        return (
                            <div className="product-card" key={idx}>
                                <div>
                                    <img className="product-img" src={product.imageUrl} alt={product.name} />
                                </div>
                                <div className="product-content">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}원</span>
                                    <div className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="footer">
                <a href="javascript:;">회사소개</a><a href="javascript:;">이용약관</a><a href="javascript:;">통신판매업:123-1234</a><a href="javascript:;">사업자등록번호 : 456-4567</a><a href="javascript:;">개인정보...</a>
            </div>
        </>
    )
}
export default Mainpage;