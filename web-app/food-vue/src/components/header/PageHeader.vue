<template>
  <div class="col-12 ops-portal-header">
        <div class="ops-left-section">
            <div class="ops-logo-container"><img src="../../assets/swiggy.png"/></div>
            <div class="app-header align-left">{{appHeader}}</div>
        </div>
        <div class="add-res-button-container align-right">
            <button class="btn add-res-btn">
                + ADD NEW RESTAURANT
            </button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    appHeader: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "./PageHeader.scss";
</style>
