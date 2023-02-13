import { createRouter, createWebHashHistory } from 'vue-router'
import FamilyAlbum from './views/FamilyAlbum.vue'
import FriendsEnemies from './views/FriendsEnemies.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: FamilyAlbum,
      path: '/familyAlbum',
    },
    {
      component: FriendsEnemies,
      path: '/friendsEnemies',
    },
  ],
})
