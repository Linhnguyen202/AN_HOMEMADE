import Banner from "./Components/banner/Banner";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Header/Main";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
import Form from "./Components/Admin/Form/Form";
import Manage from "./Components/Admin/Manage/Manage"
import ProductsDetail from "./page/ProductsDetail";
function App() {
  return (
    <div className="App">
    <Routes>
        <Route element={<Main></Main>}>
           <Route exact path="/" element={<><Banner></Banner><HomePage></HomePage></>}></Route>
           <Route path="/products" element={<ProductPage></ProductPage>}></Route>
           <Route path="/products/:productId" element={<ProductsDetail></ProductsDetail>}></Route>
        </Route>
        <Route path="/Admin" element={<Form></Form>}></Route>
        <Route path="/Admin/Manage" element={<Manage></Manage>}></Route>
    </Routes>
       
    </div>
  );
}

export default App;
