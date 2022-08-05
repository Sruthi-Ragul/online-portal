<template>
    <div class="search-container">
        <div  class="total-restaurant-text col-6 align-left"> {{count}} Restaurants</div>
        <div  class="total-restaurant-search col-6 align-right">
            <input type="search" @change="searchHandler"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RestaurantListSearch',
  data: function() {
    return {
      searchText: ''
    }
  },
  props: {
      count: Number,
      searchHandler : Function
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "./style.scss";
</style>