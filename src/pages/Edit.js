import { useNavigate, useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom"; {} 안이 훅이라고 함, 훅 = 함수이다.
const Edit = ()=>{
    let [searchParams, setSearchParams]=useSearchParams();
    // let [searchParams, setSearchParams]=useSearchParams(); 는
    /**
     * let searchParamsUrl=useSearchParams()
     * let searchParams=searchParamsUrl[0]
     * let setSearchParams=searchParamsUrl[1]
     * 의 줄인말이다.
     */
    // let [기본값, 세팅이 바꼈을 때 값]=useSearchParams();
    // 
    // let navi = useNavigate(); -> 사이드 네비게이션을 만들기 위해 새로운 변수 지정
    let navi = useNavigate();
    // 
    const id=searchParams.get("id")
    const mode=searchParams.get("mode")
    return(
    <div>
        Edit페이지{id}
        {/* 사이드 네비게이션을 만들기 위해 작성 */}
        {/* <button onClick={()=>{return}}>Home</button> */}
        {/* <button onClick={()=>{}}>Home</button> return문 안에 한 줄 일 경우에 return 과 중괄호 까지 생략 가능하다.*/}
        {/* <button onClick={()=>}>Home</button> return문 안에 한 줄 일 경우에 return 과 중괄호 까지 생략 가능하다.*/}
        <br/>
        <button onClick={()=>navi("/")}>Home</button>
        <br/>
        <button onClick={()=>navi("/new")}>Home</button>
        {/*  */}
        <ul>
            <li>{mode}</li>
        </ul>
    </div>
    )}
export default Edit;