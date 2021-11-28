<template>
  <div id="nav">
   <Navbar/>
    <router-view/>
  </div>
  


  
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Standings from '@/components/Standings.vue'
import json from '@/assets/teams.json'




export default {
  name: 'Home',
  components: {
    Navbar,
    HelloWorld,
    Standings,
    json
  },

data(){
 return{
    myJson: json
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
