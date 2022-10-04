import { Routes, Route, useNavigate } from "react-router-dom";
// antd 임폴트
import { Button} from 'antd';
// 기본 antd css 아래 링크 하면 알아서 디자인 됨
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// antd 아이콘 임폴트 하기
// import { 사용하고 싶은 아이콘 컴포넌트 작성 } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
// 
import { Link } from "react-router-dom";
import Mainpage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
// App.css연결
import "./App.css";
const App = () => {
   let navigate=useNavigate();
   return (
      <>
         <div id="header">
            <div id="header-area">
               <Link to={"/"}>
                  <img src="../images/icons/logo.png" alt="logo" />
               </Link>
               <Button size={"large"} icon={<UploadOutlined />} onClick={()=>{navigate("/upload")}}>상품업로드</Button>
            </div>
         </div>
         <Routes>
            <Route path="/" element={<Mainpage />}></Route>
            <Route path="/upload" element={<UploadPage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
         </Routes>
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
export default App;