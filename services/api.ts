import axios from "axios";
import { Order } from "../types/Order";
import { Value } from "../types/Value";

const instance = axios.create({
    baseURL: 'http://localhost:8080/wishlist'
})


const api = {

    async getAll(value: Value, order: Order, page: number) {
        const params = new URLSearchParams();
        params.append('value', value);
        params.append('order', order);
        params.append('page', page.toString());
        let response = await instance.get('', {
            params
        });
        return response.data;

    },

    async create(data: FormData) {
        let response = await instance.post('', {
            data, 
            headers: {
                "Content-Type": "multipart/form-data" 
            }
        })
        return response.data;
    },

    async getUnique(id: number) {
        let response = await instance.get(`/${id}`);
        return response.data;

    },

    async update(id: number, site: string, price: number) {
        let response = await instance.put(`/${id}`, {
            site, price
        });
        return response.data;
    },

    async destroy(id: number) {
        let response = await instance.delete(`/${id}`);
        return response.data;
    },

    async getFindBySearch(value: string) {
        const params = new URLSearchParams();
        params.append('value', value);
        let response = await instance.get('/search', {
            params
        });
        return response.data;
    }
}

export default api;