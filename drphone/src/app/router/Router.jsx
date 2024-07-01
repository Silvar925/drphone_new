import {BrowserRouter, Routes, Route} from "react-router-dom"
import {BaseLayout} from "../layouts/BaseLayout/BaseLayout"
import {ServicesProducts} from "../../pages/ServicesProducts/index";
import {Map} from "../../pages/Map/index.js";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route path="service-products" element={<ServicesProducts/>}/>
                    <Route path="map" element={<Map/>}/>
                </Route>

                <Route path="*" element={<div>Старница не найдена</div>}/>
            </Routes>
        </BrowserRouter>
    )
}   