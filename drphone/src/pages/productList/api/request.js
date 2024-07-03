import axios from "axios";
import {BASE_URL} from "../../../app/setting.js";
import {useEffect} from "react";

export const getProductList = (url, setData, productList) => {
    useEffect(() => {
        axios.get(`${BASE_URL}/${url}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных пользователя:', error);
            });
    }, [productList])
}
