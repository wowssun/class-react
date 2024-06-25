import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Test from "./pages/Test";

function App() {
  return (
    // <div style={{padding: "40px"}}>
    //     <div style={{border: "1px solid red", width: "400px", textAlign: "center"}}>
    //       <span style={{display: "block", padding: "10px 0"}}>
    //         Are you sure?
    //       </span>
    //       <div className="flex gap-1 justify-center">
    //         <Button text={"Cancel"} color={"bg-gray-200"}/>
    //         <Button text={"Delete"} color={'bg-red-500'}/>
    //       </div>
    //       {/*counter*/}
    //       <Counter />
    //     </div>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/result" element={<Result />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
