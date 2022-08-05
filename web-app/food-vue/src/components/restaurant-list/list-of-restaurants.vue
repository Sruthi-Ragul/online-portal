<template>
    <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Cuisine</th>
                <th scope="col">City</th>
                <th scope="col">Food Type</th>
                <th scope="col">Dinning Type</th>
                <th scope="col">Swiggy Super Discount</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of tableData" @click="restaurantDetails(item.name)" :key="item.name" >
                <td v-for="data in item" :key="item[data]">
                    {{data}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'RestaurantListTable',
  props: {
      tableData: []
  },
  methods: {
      restaurantDetails(name) {
          this.$router.push(`/restaurant/${name}`)
      }
  }
}
</script>