import Banner from "./Components/banner/Banner";
import Header from "./Components/Header/Header";
import { Route, Routes,Switch } from "react-router-dom";
import Main from "./Components/Header/Main";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
import Form from "./Components/Admin/Login/Login";
import Manage from "./Components/Admin/Manage/Manage"
import ProductsDetail from "./page/ProductsDetail";
import 'react-confirm-alert/src/react-confirm-alert.css' 
import { useAuth } from "./context/authContext";
import { useState } from "react";
import Protected from "./Protected";
import ProductsBox from "./Components/Admin/Manage/Products/ProductsBox";
import CategoryBox from "./Components/Admin/Manage/Categories/CategoryBox";
function App() {
  const {active,setActive} = useAuth()
  const [isLoggedIn, setisLoggedIn] = useState(null);
  console.log( sessionStorage.getItem("UserLogged"))
  return (
    <div className="App">
    <Routes>
       {/* Nguoi dung */}
        <Route element={<Main></Main>}>
           <Route exact path="/" element={<><Banner></Banner><HomePage></HomePage></>}></Route>
           <Route path="/products" element={<ProductPage></ProductPage>}></Route>
           <Route path="/products/:productId" element={<ProductsDetail></ProductsDetail>}></Route>
        </Route>
        {/* admin */}
        <Route path="/Admin/login" element={<Form setisLoggedIn={setisLoggedIn}></Form>}></Route>
        <Route element={<Protected isLoggedIn={isLoggedIn}><Manage></Manage></Protected>}>
          <Route path="/Admin/home" element={<div></div>}></Route>
          <Route path="/Admin/products" element={<ProductsBox></ProductsBox>}></Route>
          <Route path="/Admin/category" element={<CategoryBox></CategoryBox>}></Route>
        </Route> 
   
        
       
    </Routes>
  

       
    </div>
  );
}

export default App;
