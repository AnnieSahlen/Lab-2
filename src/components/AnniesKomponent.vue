<script>
export default {
  // methods: {
  //   getFamily() {
  //     fetch('https://rickandmortyapi.com/api/character')
  //       .then((res) => res.json())
  //       .then((characters) => {
  //         this.characters = characters.results
  //       })
  //   },
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
  // },
}
</script>

<template>
  <ol>
    <li :key="char.id" v-for="char in characters">Name: {{ char.name }}</li>
    <!-- <input type="button" value="Hämta familjen" @click="getFamily" /> -->
  </ol>
</template>
