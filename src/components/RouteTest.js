import { Link } from "react-router-dom";

const RouteTest = ()=>{return(
<div>
    {/*  a 태그 넣는 법 <Link to={경로}>Home</Link> 하고 App.js에 연동
        Route 안에 path에 쓴 경로대로 써야한다.
    */}
    <Link to={"/"}>Home</Link> <br/>
    <Link to={"/new"}>New</Link> <br/>
    <Link to={"/d"}>Diary</Link> <br/>
    <Link to={"/edit"}>Edit</Link>
</div>
)}
export default RouteTest;