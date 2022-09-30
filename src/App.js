import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Mainpage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
// App.css연결
import "./App.css";
const App = () => {
   return (
      <>
         <Link to={"/"}>
            <div id="header">
               <div id="header-area">
                  <img src="../images/icons/logo.png" alt="logo" />
               </div>
            </div>
         </Link>
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