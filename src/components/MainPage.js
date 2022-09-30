import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MainPage.css';
import axios from "axios";
const Mainpage = () => {
    let [products, setProducts] = React.useState([]);
    // React.useState([]); 는 컴포넌트 내 애들을 읽어준다. useState()라는 함수는 값을 2개를 반환 하는데 초기 값, 콜백함수(변경 된 초기값)
    // let [products, setProducts] 는 products는 선택 값, 그리고 setProducts는 콜백 된 후 재 할당 되는 값(변경 된 값)
    // useState([]); 써아하나 몰라서 주석
    useEffect(() => { //특정 모듈에 있는(위에 import react 한거 import React from "react";) 에서 useEffect를 불로 오는데 자동으로 {useEffect} 가 완성 된다
            // useEffect(()=>{실행문},[]) 는 반복되는 함수지옥(콜백지옥)을 막아준다. [] 안에 값이 없으면 비여있기 때문에 실행이 안된다. 그래서 지옥 끝 / 만약 값을 넣으면 그 값이 계속 반복이 된다.
            // useEffect(axios()=>{}) 는 axios가 반복되기 때문에 axios를 막아준 것
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
                                <Link className="product-link" to={`/product/${idx}`}>
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
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div id="footer">
                <Link to={'/'}>회사소개 </Link>
                <Link to={'/'}>이용약관 </Link>
                <Link to={'/'}>통신판매업:123-1234 </Link>
                <Link to={'/'}>사업자등록번호 : 456-4567 </Link>
                <Link to={'/'}>개인정보... </Link>

            </div>
        </>
    )
}
export default Mainpage;