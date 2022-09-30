import { Routes, Route} from "react-router-dom";
import Mainpage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
const App = ()=>{return(
<>
 <Routes>
    <Route path="/" element={<Mainpage />}></Route>
    <Route path="/upload" element={<UploadPage />}></Route>
    <Route path="/product/:id" element={<ProductPage />}></Route>
 </Routes>
 <UploadPage></UploadPage>
 <ProductPage></ProductPage>
</>
)}
export default App;