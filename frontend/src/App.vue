<template>
  <Navbar class="navbar" />
  <div class="wrapper grid" >
  <router-view /> 
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.navbar {
  grid-column: 1/9;
}

.wrapper {
  grid-column: 1/9;
}

</style>
