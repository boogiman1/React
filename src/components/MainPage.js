import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
import { Carousel } from "antd";
dayjs.extend(relativeTime);
const Mainpage = () => {
    let [products, setProducts] = React.useState([]);
    let [products2, setProducts2] = React.useState([]);
    let [banners, setBanners] = React.useState([]);
    // React.useState([]); 는 컴포넌트 내 애들을 읽어준다. useState()라는 함수는 값을 2개를 반환 하는데 초기 값, 콜백함수(변경 된 초기값)
    // let [products, setProducts] 는 products는 선택 값, 그리고 setProducts는 콜백 된 후 재 할당 되는 값(변경 된 값)
    useEffect(() => { //특정 모듈에 있는(위에 import react 한거 import React from "react";) 에서 useEffect를 불로 오는데 자동으로 {useEffect} 가 완성 된다
        // useEffect(()=>{실행문},[]) 는 반복되는 함수지옥(콜백지옥)을 막아준다. [] 안에 값이 없으면 비여있기 때문에 실행이 안된다. 그래서 지옥 끝 / 만약 값을 넣으면 그 값이 계속 반복이 된다.
        // useEffect(axios()=>{}) 는 axios가 반복되기 때문에 axios를 막아준 것
        /**
         * products 통신
         */
        axios.get(`${API_URL}/products`)
        .then((res) => {
            products = res.data.product;
            setProducts(products);
                console.log(res);
        })
        .catch((err) => {
                return console.log(err);
        });
        /**
         * products2 통신
         */
        axios.get(`${API_URL}/products2`)
        .then((res) => {
            products2 = res.data.product2;
            setProducts2(products2);
                console.log(res);
        })
        .catch((err) => {
                return console.log(err);
        });
        /**
         * banners 통신
         */
         axios.get(`${API_URL}/banners`)
         .then((res) => {
             banners = res.data.banners;
             setBanners(banners);
                 // console.log(res);
         })
         .catch((err) => {
                 return console.log(err);
         });
    }, []);
    if(banners===undefined){
        return <h1>상품정보를 받고 있습니다.</h1>
        {/* 위에 undefined 때문에 이미지가 안나와서 if(product===undefined을 작성한다) */}
    }
    return (
        <>
            <div id="body">
                <Carousel autoplay autoplaySpeed={1600}>
                    {banners.map((banner,index)=>{
                        return(
                            <Link to={banner.href} key={index}>
                                <div id="banner">
                                    <img src={`${API_URL}/${banner.imageUrl}`} />
                                </div>
                            </Link>
                        )
                    })}
                </Carousel>
                <section className="section">
                    <h2>What's NEW</h2>
                    <div id="product-list">
                        {products.map((product, idx) => {
                            /* console.log(product, idx); */
                            return (
                                <div className="product-card" key={idx}>
                                    <Link className="product-link" to={`$/product/${product.id}`}>
                                        <div>
                                            <img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                                        </div>
                                        <div className="product-content">
                                            <span className="product-name">{product.name}</span>
                                            <span className="product-price">{product.price}원</span>
                                            <div className="product-footer">
                                                <div className="product-seller">
                                                    <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                                                    <span>{product.seller}</span>
                                                </div>
                                                <span className="product-date">{[dayjs(product.createdAt).fromNow()]}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="section">
                    <h2>Weekly Best</h2>
                    <div id="product-list2">
                        {products2.map((products2, idx) => {
                            return (
                                <div className="product-card" key={idx}>
                                    <Link className="product-link" to={`$/product/${products2.id}`}>
                                        <div>
                                            <img className="product-img" src={`${API_URL}/${products2.imageUrl2}`} alt={products2.name2} />
                                        </div>
                                        <div className="product-content">
                                            <span className="product-name">{products2.name2}</span>
                                            <span className="product-price">{products2.price2}원</span>
                                            <div className="product-footer">
                                                <div className="product-seller">
                                                    <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                                                    <span>{products2.seller2}</span>
                                                </div>
                                                <span className="product-date">{[dayjs(products2.createdAt).fromNow()]}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}
export default Mainpage;