<script>
import CitiesList from './components/CitiesList.vue'
import HelloWorld from './components/HelloWorld.vue'
import AnniesKomponent from './components/AnniesKomponent.vue'
// import FamilyAlbum from './views/FamilyAlbum.vue'

export default {
  components: {
    CitiesList,
    HelloWorld,
    AnniesKomponent,
    // FamilyAlbum,
  },
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-evenly;
}
</style>

<template>
  <nav>
    <RouterLink to="/familyAlbum">Family album</RouterLink>
    <RouterLink to="/friendsEnemies">Friends & Enemies</RouterLink>
  </nav>
  <RouterView />
  <!-- <FamilyAlbum /> -->
  <!-- <HelloWorld msg="Hello World!" /> -->
  <!-- <CitiesList /> -->
  <!-- <AnniesKomponent /> -->
</template>
