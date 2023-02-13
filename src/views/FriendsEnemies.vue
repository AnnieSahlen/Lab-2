<script>
export default {
  created() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((characters) => {
        this.characters = characters.results.slice(5)
      })
    // this.getCharacters()
  },
  data() {
    return {
      characters: [],
      page: 2,
      categorys: ['name', 'status', 'species', 'gender', 'origin', 'location'],
    }
  },
  methods: {
    getCharacters() {
      fetch(`https://rickandmortyapi.com/api/character/?page=${this.page}`)
        .then((res) => res.json())
        .then((characters) => {
          this.characters = characters.results
          // this.characters.push(characters.results)
          this.page++
          console.log(this.characters)
        })
    },
  },
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>

<template>
  <!-- <h1>Friends & Enemies</h1>

  <label for="categorys">Sort</label>
  <select id="categorys " name="categorys" v-model="categorys">
    <option value="name">Name</option>
    <option value="status">Status</option>
    <option value="species">Species</option>
    <option value="gender">Gender</option>
    <option value="origin">Origin</option>
    <option value="location">Location</option>
  </select> -->

  <!-- <div v-for="char in characters">
    <p>{{ char[0].name }}</p>
    <img :src="char.image" />
  </div>
-->

  <h1>Friends & Enemies</h1>
  <div>
    <input id="checkName" type="checkbox" v-model="categorys" value="name" />
    <label for="checkName">Name</label>
    <input
      id="checkStatus"
      type="checkbox"
      v-model="categorys"
      value="status" />
    <label for="checkStatus">Status</label>
    <input
      id="checkSpecies"
      type="checkbox"
      v-model="categorys"
      value="species" />
    <label for="checkSpecies">Species</label>
    <input
      id="checkGender"
      type="checkbox"
      v-model="categorys"
      value="gender" />
    <label for="checkGender">Gender</label>
    <input
      id="checkOrigin"
      type="checkbox"
      v-model="categorys"
      value="origin" />
    <label for="checkOrigin">Origin</label>
    <input
      id="checkLocation"
      type="checkbox"
      v-model="categorys"
      value="location" />
    <label for="checkLocation">Location</label>
  </div>

  <!-- <div :key="char.id" v-for="char in characters">
    <div>
      <img alt="" :src="char.image" />
      <ul>
        <li v-if="categorys.includes('name')">
          {{ char.name }}
        </li>
        <li v-if="categorys.includes('status')">
          {{ char.status }}
        </li>
        <li v-if="categorys.includes('species')">
          {{ char.species }}
        </li>
        <li v-if="categorys.includes('gender')">
          {{ char.gender }}
        </li>
        <li v-if="categorys.includes('origin')">
          {{ char.origin.name }}
        </li>
        <li v-if="categorys.includes('location')">
          {{ char.location.name }}
        </li>
      </ul>
    </div>
  </div> -->

  <!-- <div :key="char.id" v-for="char in characters"> -->
  <div :key="char.id" v-for="char in characters">
    <ul>
      <li>
        <img alt="" :src="char.image" />
        <ul>
          <li v-if="categorys.includes('name')">
            {{ char.name }}
          </li>
          <li v-if="categorys.includes('status')">
            {{ char.status }}
          </li>
          <li v-if="categorys.includes('species')">
            {{ char.species }}
          </li>
          <li v-if="categorys.includes('gender')">
            {{ char.gender }}
          </li>
          <li v-if="categorys.includes('origin')">
            {{ char.origin.name }}
          </li>
          <li v-if="categorys.includes('location')">
            {{ char.location.name }}
          </li>
        </ul>
      </li>

      <!-- <li>
        <img alt="" :src="char.image" />
        <p v-if="categorys.includes('name')">{{ char.name }}</p>
        <p v-if="categorys.includes('status')">{{ char.status }}</p>
        <p v-if="categorys.includes('species')">{{ char.species }}</p>
        <p v-if="categorys.includes('gender')">{{ char.gender }}</p>
        <p v-if="categorys.includes('origin')">{{ char.origin.name }}</p>
        <p v-if="categorys.includes('location')">{{ char.location.name }}</p>
      </li> -->

      <!-- <li v-if="categorys.includes('species')">
        {{ char.species }}
      </li>
      <li v-if="categorys.includes('gender')">
        {{ char.gender }}
      </li>
      <li v-if="categorys.includes('origin')">
        {{ char.origin.name }}
      </li>
      <li v-if="categorys.includes('location')">
        {{ char.location.name }}
      </li> -->
    </ul>
  </div>
  <!-- </div> -->

  <input value="Hämta fler karaktärer" type="button" @click="getCharacters" />
</template>

<!--
  Att göra
- Knapp som hämtar fler sidor
- Dropdown med filterknappar

1. page-datavariabel som är 1 från början
2. (immediate) watch som "bevakar" page-datavariabeln och kör fetch (direkt och) när den ändras
3. v-on för att ändra page (methods)

1. skapa en method med en page-parameter
2. anropa metoden med v-on
3. metoden kör fetch
-->
