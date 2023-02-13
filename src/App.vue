<script>
import AnniesKomponent from './components/AnniesKomponent.vue'

export default {
  components: {
    AnniesKomponent,
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
  <AnniesKomponent />
</template>
