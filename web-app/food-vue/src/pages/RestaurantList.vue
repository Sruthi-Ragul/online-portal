<template>
  <div class="col-12 restaurant-list-container">
        <div style="display: flex;padding:20;">
            <div class="col-9" >
            <RestaurantListSearch v-bind:count="listOfRestaurants.length" v-bind:searchHandler="searchHandler"/>
            <RestaurantListTable v-bind:tableData="!isSearchOn ? listOfRestaurants : search " />
            </div>
        <div class="col-3">
          <FilterSection/>
        </div>
        </div>
  </div>
</template>
<script>
import { useRestaurantListStore } from '../shared-framework/restaurant-list';
import { storeToRefs } from "pinia";
import RestaurantListTable from '../components/restaurant-list/list-of-restaurants';
import RestaurantListSearch from '../components/restaurant-list/total-restaurant';
import FilterSection from '../components/restaurant-list/filter-section';
export default {
  name: 'RestaurantList',
  components : {
    RestaurantListTable,
    RestaurantListSearch,
    FilterSection
  },
  setup() {
    const store = useRestaurantListStore();
    const { listOfRestaurants, search, isSearchOn } = storeToRefs(store);
    const { getListOfRestaurants, getSearchResults, clearSearch } = store;

    return { listOfRestaurants, search, isSearchOn, getListOfRestaurants, getSearchResults, clearSearch };
  },
  created() {
    this.getListOfRestaurants();
  },
  methods: {
    searchHandler(event) {
      if(event.target.value === "") {
        this.clearSearch();
      } else {
        this.getSearchResults(event.target.value);
      }
    }
  }
};
</script>
<style>
.list-root-container{
display: flex
}
</style>