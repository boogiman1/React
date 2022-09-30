import { useParams, useNavigate } from "react-router-dom";
const ProductPage = ()=>{
    const {id}=useParams();
    const navi=useNavigate();
    return(
    <div>
        ProductPage {`선택하신 상품은 ${id} 상품 입니다.`}
        <hr/>
        <button onClick={()=>navi("/upload")}>upload로 이동하기</button>
        <hr/>
    </div>
    )}    
export default ProductPage;
