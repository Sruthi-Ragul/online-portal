<template>
  <div class="col-12 restaurant-details-container">
       {{restaurantDetail}}
  </div>
</template>

<script>
export default {
  name: 'RestaurantDetail',
  components : {
  }
}
</script>
<script setup>
    import { storeToRefs } from 'pinia'
    import { useRestaurantDetailsStore } from '../shared-framework/restaurant-details'
    import { useRoute } from 'vue-router';
    const route = useRoute();  
    const name = route.params.name;
    const { restaurantDetail } = storeToRefs(useRestaurantDetailsStore());
    const { getDetails } = useRestaurantDetailsStore();
    getDetails(name);
</script>

<style>
.list-root-container{
display: flex
}
</style>