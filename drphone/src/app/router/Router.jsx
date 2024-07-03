import {BrowserRouter, Routes, Route} from "react-router-dom"
import {BaseLayout} from "../layouts/BaseLayout/BaseLayout"
import {ServicesProducts} from "../../pages/ServicesProducts/index";
import {Map} from "../../pages/Map/index.js";
import {ProductList} from "../../pages/productList/index.js";
import {ProductPage} from "../../pages/productPage/index.js";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route path="service-products" element={<ServicesProducts/>}>
                        <Route path=":productList" element={<ProductList/>}>
                            <Route path=":productPage" element={<ProductPage/>}/>
                        </Route>
                    </Route>
                    <Route path="map" element={<Map/>}/>
                </Route>

                <Route path="*" element={<div>Старница не найдена</div>}/>
            </Routes>
        </BrowserRouter>
    )
}   