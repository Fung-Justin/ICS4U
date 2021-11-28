<template>
  <div id="nav">
   <Navbar/>
   {{storeData()}}
    <router-view/>
  </div>
  


  
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Standings from '@/components/Standings.vue'
import tjson from '@/assets/teams.json'
import gjson from '@/assets/games.json'




export default {
  name: 'Home',
  components: {
    Navbar,
    HelloWorld,
    Standings,
    tjson,
    gjson
  },

data(){
 return{
    
  }
},
  methods: {
    storeData() {
      localStorage.clear();
  localStorage.setItem('storedTeams', JSON.stringify(tjson));

  console.log("storing");
  localStorage.setItem('storedAllGames', JSON.stringify(gjson));


 
}
  }
}
</script>

<style>
#app {

  color: #000000;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

   body::before {
    display: block;
    content: '';
    height: 150px;
  }
</style>
