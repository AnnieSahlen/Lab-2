<script>
export default {
  created() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((characters) => {
        this.characters = characters.results
      })
  },
  data() {
    return {
      characters: null,
    }
  },
  props: { fam: Number },
}
</script>

<style lang="scss">

$yellow-color: #ffa;

input {
  background-color: $yellow-color;
}
</style>

<template>
  <h1>Some characters</h1>
  <ul>
    <li :key="char.id" v-for="char in characters">{{ char.name }}</li>
  </ul>
  <p>There are {{ fam }} in the family!</p>
</template>
