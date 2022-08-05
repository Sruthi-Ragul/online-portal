mock-apis/src/restaurants/__/menu_items
import { defineStore } from 'pinia';
import { ref } from 'vue';
import * as axios from 'axios';

export const useRestaurantMenuStore = defineStore('restaurantList', () => {
    const listOfMenus = ref({data: [], status: 'NotStarted'})
    async function getListOfMenus(resName,menu) {
        axios
        .get(`http://localhost:4000/restaurants/${resName}/menu_items/${menu}`)
        .then(response => (this.listOfMenus = {data: response.data , status: 'Success' }))
        .catch(() =>(this.listOfMenus = {data: null , status: 'Failure' }) )
    }
    return { listOfMenus, getListOfMenus }
});