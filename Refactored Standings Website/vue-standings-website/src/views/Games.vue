
<template>
  <div class="games">

   
  
       <div class="container">
          <div> </div>
       
            <div id="pagination" class="card card-body"  >
                <pagination :Week = this.currentWeek @increase-Week = "addWeek()" @decrease-Week = "subtractWeek()" />
                <div class="btn-group"  role="group" id="btnGroup">
                  
                   
                   
                  </div>
      
                
            </div>

      </div>
    <div class="container">
  <div v-for="data in filterJson()" :key = "data">

    <card 
    :cardTitle = cardTitle(data.HomeTeam,data.AwayTeam,data.Week)
    :hTeamImg = Teamimg(data.HomeTeam) 
    :aTeamImg = Teamimg(data.AwayTeam)
    :hTeam = data.HomeTeam
    :aTeam = data.AwayTeam
    :hTeamScore = data.HomeScore
    :aTeamScore = data.AwayScore
    :hq1 = data.HomeScoreQuarter1
    :hq2 = data.HomeScoreQuarter2
    :hq3 = data.HomeScoreQuarter3
    :hq4 = data.HomeScoreQuarter4
    :hOT = data.HomeScoreOvertime
    :aq1 = data.AwayScoreQuarter1
    :aq2 = data.AwayScoreQuarter2
    :aq3 = data.AwayScoreQuarter3
    :aq4 = data.AwayScoreQuarter4
    :aOT = data.AwayScoreOvertime
     
     />
  </div>
  
  </div>
</div>
</template>


<script>

import card from '@/components/GamesCard.vue'
import pagination from '@/components/Pagination.vue'



export default {
  name: 'Games',
  
  components: {
    card,
    pagination
    
  },

  data() {
 
     return{
      teamsJson: JSON,
    gamesJson: JSON,
    filteredJson :JSON,
    currentWeek:Number,
   

    }
  },

  methods: {
 
   addWeek(){
     if(this.currentWeek < 17)
     this.currentWeek++;
   },
   subtractWeek(){
     if(this.currentWeek > 1)
     this.currentWeek--
   },
    filterJson(){
      this.filteredJson = this.gamesJson.filter(game => (game.Week == this.currentWeek))
      return this.filteredJson;
    },

  
   Teamimg(team){
  
    let result = this.teamsJson.filter(teams =>(teams.Team ===team ))
   

    return result[0].Logo
   },

   cardTitle(hteam, ateam, week){
     return `Week ${week}: ${ateam} at ${hteam}` 

   },
    

   



  },
  created(){
    this.filteredJson = [];
    this.currentWeek = 1;
     this.teamsJson = JSON.parse(localStorage.getItem('storedTeams'));
   this.gamesJson = JSON.parse(localStorage.getItem('storedAllGames'));
    
  },
  mounted(){
  
  }

  
}

</script>
