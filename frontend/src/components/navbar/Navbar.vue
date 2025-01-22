<template>
  <nav class="grid" >
    <div class="mobile-nav grid">
      <span @click="openSideBar" class="material-icons icon light-icon" >menu</span>
    </div>
    <div v-if="showSideBar" class="mobile-sidebar grid">
      <span @click="closeSideBar" class="material-icons icon light-icon close-icon" >close</span>
      <ul class="side-nav-items" >
        <li>
          <router-link to="/" >Dashboard</router-link>
        </li>
        <li>
          <router-link to="/all-transactions" >Transactions</router-link>
        </li>
        <li>
          <router-link to="/accounts">Accounts</router-link>
        </li>
        <li>
          <router-link to="/cards" >Cards</router-link>
        </li>
        <li>
          <router-link to="/settings" >Settings</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showSideBar: false
    }
  },
  methods: {
    openSideBar() {
      this.showSideBar = true;
    },
    closeSideBar() {
      this.showSideBar = false;
    }
  }
}
</script>

<style>
/* mobile styles */
nav {
 height: 60px;
 background-color: var(--primary);
 position: sticky;
 z-index: 20;
}

.mobile-nav {
  grid-column: 1/9;
  display: grid;
  place-items: center;
  grid-row: 1/2;
}

.mobile-sidebar {
  position: fixed;
  height: 100vh;
  background: var(--primary-shade1);
  top: 0;
  left: 0;
  display: block;
  width: 150px;
  z-index: 0;
  margin: auto;
  grid-template-rows: 1fr 10fr;
}

.close-icon {
  grid-column: 1/9;
  margin-inline: auto;
  margin-block: 20px;
}

.side-nav-items {
  grid-column: 1/9;
  color: var(--textLight);
  text-align: center;
}

.side-nav-items li {
  grid-column: 1/9;
  margin-block: 20px;
  margin-inline: auto;
  padding: 16px 8px;
}

/* small tablet styles */
@media screen and (min-width: 620px) {

}

/* large tablet and laptop styles */
@media screen and (min-width: 960px) {
  
}

/* large desktop styles */
@media screen and (min-width: 120px) {
  
}
</style>