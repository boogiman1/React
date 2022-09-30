import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom"; 불러오고 아래 변수 선언 const {id} = useParams();  {} 안이 훅이라고 함, 훅 = 함수이다.
const Diary = ()=>{
    const {id}=useParams();
    return(
    <div>Diary페이지{id}</div>
    // <Route path="/diary/:id" element={<Diary/>} /> 하면 Diary.js 안에 있는 변수 id를 선언 한 곳 때문에 주소창에 "http://localhost:3000/diary/123" 라고 치면 123이 화면에 나온다
    )}
export default Diary;