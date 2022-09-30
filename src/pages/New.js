import { useNavigate} from "react-router-dom";
// 뒤로가기 만들기
const New = ()=>{
    let navi=useNavigate();
    return(
    <div>
        New페이지
        <button onClick={()=>navi(-1)}>back</button>
    </div>
    )}
export default New;