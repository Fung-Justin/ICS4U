<template>
  <div class="home">
    
    
     <div class="container my-5">
            
            

     
     <h2 class="title m-3">NFL Standings</h2>
    <table class="table">
      <thead>
        <tr>
           
          <th scope="col" @click="sort('team')">Team</th>
          <th scope="col" @click="sort('wins')">Wins</th>
          <th scope="col"  @click="sort('losses')">Losses</th>
          <th scope="col" @click="sort('ties')">Ties</th>
          <th scope="col" @click="sort('Percentage')">Percentage</th>
          <th scope="col" @click="sort('pf')">PF</th>
          <th scope="col" @click="sort('pa')">PA</th>
          <th scope="col" @click = "test()">Conf. Record</th>
          <th scope="col">Div. Record</th>
          <th scope="col">Home</th>
          <th scope="col">Away</th>
          <th scope="col">Streak</th>
        </tr>
      </thead>
      <Standings :teams = teams :key="num"/>
    </table>
    
  </div>
  </div>
</template>


<style scoped>

</style>

<script>
// @ is an alias to /src


import Standings from '@/components/Standings.vue'
import json from '@/assets/teams.json'
import gjson from '@/assets/games.json'




export default {
  name: 'Home',
  components: {
    
  
    Standings,
    json,
    gjson

    
  },

data(){
 return{
    teamsJson: json,
    gamesJson: gjson,
  teams: [],
  sortDirection:String,
   num:Number,
   prevSection:String
  
  }
},

 methods: {

   forceRerender(){
     this.num++;
   },

   test(){
     this.teams.filter(team =>(team.Name === 'KC'));
   },

 sort(field) {
   let section = '';
   let prevSection = '';
console.log(this.sortDirection);
  if (this.sortDirection.localeCompare("ASC") == 0) {
    
    if (field === 'wins') {
      this.teams = json.sort((a, b) => b.Wins - a.Wins)
   } else if (field === 'Percentage') {
      this.teams = json.sort((a, b) => b.Percentage - a.Percentage)
      
   } else if (field === 'losses') {
      this.teams = json.sort((a, b) => b.Losses - a.Losses)
   } else if (field === 'ties') {
    this.teams = json.sort((a, b) => b.Ties - a.Ties)
 }   else if (field === 'team') {
      this.teams = json.sort((a, b) => a.Name.localeCompare(b.Name))
   }else if (field === 'pf') {
    this.teams = json.sort((a, b) => b.PointsFor - a.PointsFor)
  }else if (field === 'pa') {
    this.teams = json.sort((a, b) => b.PointsAgainst - a.PointsAgainst)
  }
  this.sortDirection = 'DSC';
  

 } else {

     
     if (field === 'wins') {
      this.teams = json.sort((a, b) => a.Wins - b.Wins)

   } else if (field === 'Percentage') {
      this.teams = json.sort((a, b) => a.Percentage - b.Percentage)

   }else if (field === 'ties') {
    this.teams = json.sort((a, b) => a.Ties - b.Ties)
 }  else if (field === "losses") {
      this.teams = json.sort((a, b) => a.Losses - b.Losses)
   } else if (field === "team") {
      this.teams = json.sort((a, b) => b.Name.localeCompare(a.Name))
   }else if (field === 'pf') {
    this.teams = json.sort((a, b) => a.PointsFor - b.PointsFor)
  }else if (field === 'pa') {
    this.teams = json.sort((a, b) => a.PointsAgainst - b.PointsAgainst)
  }
 
  this.sortDirection = 'ASC';
  
   
  }

  
  
  

  this.forceRerender();
},
  

jsonFilter(nConference, nDivision){
  let filtered = []
  if( nConference === "NFL"){
    return this.json;
  }else{

  filtered = json.filter(team => (team.Conference === nConference && team.Division === nDivision ));
  return this.filtered;
  
  
  }
}



 },
 created (){
   this.teams = json;
   this.sortDirection = 'ASC';
   this.num = 0;
   this.prevSection = ' ';
 }

 
}


</script>


<style scoped>
img {
  display: inline;
  float: left;
}

h6{
  display: inline;
  float: left;
}
</style>