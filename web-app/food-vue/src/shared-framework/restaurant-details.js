import { defineStore } from 'pinia';
import { ref } from 'vue';
import * as axios from 'axios';

export const useRestaurantDetailsStore = defineStore('restaurantDetails', () => {
    const restaurantDetail = ref({data: [], status: 'NotStarted'})
    async function getDetails(resName) {
        axios
        .get(`http://localhost:4000/restaurants/${resName}`)
        .then(response => (this.restaurantDetail = {data: response.data, status: 'Success' }))
        .catch(() =>(this.restaurantDetail = {data: null , status: 'Failure' }) )
    }
    return { restaurantDetail, getDetails }
});