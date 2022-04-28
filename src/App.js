import Banner from "./Components/banner/Banner";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Header/Main";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
function App() {
  return (
    <div className="App">
    <Routes>
       <Route element={<Main></Main>}>
           <Route exact path="/" element={<><Banner></Banner><HomePage></HomePage></>}></Route>
           <Route path="/products" element={<ProductPage></ProductPage>}></Route>
        </Route>
        <Route path="/admin" element={<>Admin page</>}></Route>
    </Routes>
       
    </div>
  );
}

export default App;
