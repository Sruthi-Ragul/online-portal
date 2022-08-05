import { defineStore } from 'pinia';
import * as axios from 'axios';

export const useRestaurantListStore = defineStore('restaurantList', {
        state: () => ({
            listOfRestaurants: [],
            search: [],
            isSearchOn: false
        }),
        actions: {
            getListOfRestaurants() {
                axios
                .get('http://localhost:4000/restaurants/')
                .then(response => (this.listOfRestaurants = response.data ))
                .catch(() =>(this.listOfRestaurants = []) )
            },
            getSearchResults(text) {
                const searchResults = [];
                this.listOfRestaurants.forEach((eachObj) => {
                    Object.values(eachObj).forEach(item => {
                        if(item.includes(text)) {
                            searchResults.push({...eachObj});
                        }
                    });
                });
                this.search = searchResults;
                this.isSearchOn = true;
            },
            clearSearch() {
                this.search = [];
                this.isSearchOn = false;
            }
        }
    });