import { useParams, useNavigate } from "react-router-dom";
const UploadPage = ()=>{
    const navi=useNavigate();
    return(
    <div>
        UploadPage
        <button onClick={()=>navi("-1")}>Back</button>
    </div>
    )}
export default UploadPage;