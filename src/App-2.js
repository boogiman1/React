// 라우팅 시작 아래를 임폴트 해야 링크 걸 수 있음
import {BrowserRouter, Routes ,Route} from "react-router-dom";
// 
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import RouteTest from "./components/RouteTest";

const App = ()=>{return(
<BrowserRouter>
    <div className="App">
        <h1>App 컴포넌트</h1>
        <hr/>
        <Routes>
            {/* Routes로 적용한 모듈을 Route로 사용 가능하다
                <Routes>
                    <Route path="경로" element={컴포넌트} />
                </Routes>
                기본 문법
                /는 기본경로
                path="/diary" 를 path="/d" 로 해도 된다
            */}
            <Route path="/" element={<Home/>} />
            {/* <Route path="/diary/:id" element={<Diary/>} /> 하면 Diary.js 안에 있는 변수 id를 선언 한 곳 때문에 주소창에 "http://localhost:3000/diary/123" 라고 치면 123이 화면에 나온다*/}
            <Route path="/diary/:id" element={<Diary/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/edit" element={<Edit/>} />
        </Routes>
    </div>
    <hr/>
    <RouteTest>

    </RouteTest>
</BrowserRouter>
)}
export default App;