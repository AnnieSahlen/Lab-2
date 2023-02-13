<script>
export default {
  methods: {
    getFamily() {
      fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then((characters) => {
          this.characters = characters.results
          this.characters.splice(5)
        })
    },
  },
  data() {
    return {
      characters: null,
    }
  },
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
div > ul {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}
div > ul > li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 15px 15px 25px;
  border: 1px solid black;
  border-radius: 20px;
}
img {
  margin-bottom: 10px;
  border-radius: 20px;
}
p {
  font-weight: 400;
}
</style>

<template>
  <h1>Family Album</h1>
  <!-- Knapp som hämtar familjen. -->
  <input type="button" value="Hämta familjen" @click="getFamily" />
  <!--Testar att ändra för att öva git-->
  <div>
    <ul>
      <li :key="char.id" v-for="char in characters">
        <img alt="" :src="char.image" />
        <p>{{ char.name }}</p>
      </li>
    </ul>
  </div>
</template>
