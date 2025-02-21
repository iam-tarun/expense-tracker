<template>
  <div class="navbar" v-if="!$route.meta.hideNavbar" >
    <div class="app-heading">
      <h3>Expense Tracker</h3>
    </div>
    <div class="profile-link">
      Profile
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  }
}
</script>

<style>
/* mobile styles */
.navbar {
  width: 100%;
  grid-column: 1/9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  position: sticky;
}

.app-heading {
  margin-left: 10px;
  font-family: 'Robot Medium';
}

.profile-link {
  margin-right: 10px;
}


/* small tablet styles */
@media screen and (min-width: 620px) {

}

/* large tablet and laptop styles */
@media screen and (min-width: 960px) {
  .app-heading {
    /* font-size: 2rem; */
  }
}

/* large desktop styles */
@media screen and (min-width: 1200px) {
  .app-heading {
    font-size: 2rem;
  }

  .profile-link {
  margin-right: 2rem;
}
}
</style>