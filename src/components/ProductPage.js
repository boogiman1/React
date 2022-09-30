import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import "../components/ProductPage.css"
const ProductPage = ()=>{
    const {id}=useParams();
    let [product, setProduct] = useState(null);
    let navi=useNavigate();
    useEffect(()=>{
        axios.get(`https://3c247217-7784-4082-a3a1-3469982f2385.mock.pstmn.io/products/${id}`)
        .then((res) => {
            product=res.data;
            setProduct(product)
        })
        .catch((err) => {
            return console.log(err);
        });
    },[]);
    // 여기서 React.useState 를 한 이유는  MainPage.js의 하위라서 그렇다. 거기 임폴트 했기 때문
    if(product===null){
        return <h1>상품정보를 받고 있습니다.</h1>
        {/* 위에 null 때문에 이미지가 안나와서 if(product===null을 작성한다) */}
    }
    return(
    <>
        <button onClick={()=>navi(-1)}>back</button>
        <div id="image-box">
            <img src={`/${product.imageUrl}`} alt={product.name} />
            {/* 위에 null 때문에 이미지가 안나와서 if(product===null을 작성한다) */}
        </div>
        <div id="porfile-box">
            <img src="/images/icons/avatar.png" alt={product.seller} />
            <span className="product-seller">{product.seller}</span>
        </div>
        <div id="content-box">
            <div id="name">{product.name}</div>
            <div id="price">{product.price}원</div>
            <div id="createAt">{product.createAt}</div>
            <div id="description">{product.description}</div>
        </div>
    </>
    )}    
export default ProductPage;
