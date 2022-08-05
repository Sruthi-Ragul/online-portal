<template>
<div class="root">
  <PageHeader appHeader="OPS"/>
  <div class="ops-root-container">
     <router-view></router-view>
  </div>
  </div>
</template>

<script>
import PageHeader from './components/header/PageHeader';
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
