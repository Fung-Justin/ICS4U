<template>
       <nav class="navbar navbar-expand-lg bg-primary navbar-dark py-3 fixed-top">

      <div class="container">

          <a href="#" class="navbar-brand"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png" width="auto" height="75"></a>
          <h1 class="d-inline text-white"> NFL </h1>

          <button class="navbar-toggler" type="button" data-bs-toggle=collapse data-bs-target="#navmenu">

              <span class="navbar-toggler-icon"></span>

          </button>

          <div class="collapse navbar-collapse" id="navmenu">

              <ul class="navbar-nav ms-auto text-">

                  <li class="nav-item">

                     <router-link to="/" class="nav-link fs-5 px-3 text-dark">Home</router-link> 
   
    
                  </li>

                  <li class="nav-item">

                       <router-link to="/games" class=" nav-link fs-5 px-3 text-dark"> Games </router-link> 

                  </li>

                  <li class="nav-item">

                  <router-link to="/scores" class="nav-link fs-5 px-3 text-dark">Scores</router-link>

                  </li>

              </ul>

          </div>

      </div>

  </nav>

</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>