<template>
<div class="container">
  <inputForm  @addGame = "update" />
    
</div>
</template>

<script>

import inputForm from '@/components/inputForm.vue'
export default {

  components: {

    inputForm

  },

  data() {
 
     return{
      teamsJson: JSON,
    gamesJson: JSON,
  
  
   

    }
  },

methods: {
    test(){
      console.log("test");
    },

    update(newGame){
      
      this.gamesJson.push(newGame);
      console.log(this.gamesJson);
      localStorage.setItem('storedAllGames', JSON.stringify(this.gamesJson))


      if(newGame.HomeScore > newGame.AwayScore){
        this.teamsJson.forEach(team => { 
          if(team.Team === newGame.HomeTeam)
            team.Wins++;
          
        });

      } else if(newGame.HomeScore < newGame.AwayScore){
        this.teamsJson.forEach(team => { 
          if(team.Team === newGame.AwayTeam)
            team.Wins++;
          
        });

      }else {
         this.teamsJson.forEach(team => { 
          if(team.Team === newGame.AwayTeam || team.Team === newGame.HomeTeam)
            team.Ties++
          
        });
      }
      localStorage.setItem('storedTeams',JSON.stringify(this.teamsJson));
    }
 
},
created() {
   this.teamsJson = JSON.parse(localStorage.getItem('storedTeams'));
   this.gamesJson = JSON.parse(localStorage.getItem('storedAllGames'));
}

}


</script>


<style scoped>
</style>