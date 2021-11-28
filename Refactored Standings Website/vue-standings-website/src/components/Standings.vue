<template>
  
  
    
 <tbody  v-for="data in teams" :key = 'data'>
        
          <td> <img style=" height: 40px; width: auto;" :src = data.Logo  alt="Image here"> <h6>{{data.Name}}</h6></td>
          <td> <h6>{{data.Wins}}</h6></td>
          <td> <h6>{{data.Losses}}</h6></td>
          <td> <h6>{{data.Ties}}</h6></td>
          <td> <h6>{{data.Percentage}}</h6></td>
          <td> <h6>{{data.PointsFor}}</h6></td> 
          <td> <h6>{{data.PointsAgainst}}</h6></td>   
          <td> <h6> {{data.ConferenceWins}} - {{data.ConferenceLosses}}</h6></td>    
          <td> <h6> {{data.DivisionWins}} - {{data.DivisionLosses}}</h6></td>
           <td> <h6> {{ getHomeRecord(data.Team)}}</h6></td>       
            <td> <h6> {{ getAwayRecord(data.Team)}}</h6></td> 
            <td> <h6> {{ getStrk(data.Team)}}</h6></td> 

              
        
   </tbody>
    
 
</template>

<script>

import Standings from '@/components/Standings.vue'
import json from '@/assets/teams.json'
import gjson from '@/assets/games.json'

export default {
    name: 'Standings',

  props: {
    teams:Array

  },
methods: {


   

test(array){
  console.log(array);
},

 sort(field) {
  
    console.log(sortDirection);
  if (sortDirection.localeCompare("ASC") == 0) {
    
    if (field === 'wins') {
      teams = allTeams.sort((a, b) => b.Wins - a.Wins)

   } else if (field === 'Percentage') {
      teams = allTeams.sort((a, b) => b.Percentage - a.Percentage)

   } else if (field === 'losses') {
      teams = allTeams.sort((a, b) => b.Losses - a.Losses)
   } else if (field === 'ties') {
    teams = allTeams.sort((a, b) => b.Ties - a.Ties)
 }   else if (field === 'team') {
      teams = allTeams.sort((a, b) => a.Name.localeCompare(b.Name))
   }else if (field === 'pf') {
    teams = allTeams.sort((a, b) => b.PointsFor - a.PointsFor)
  }else if (field === 'pa') {
    teams = allTeams.sort((a, b) => b.PointsAgainst - a.PointsAgainst)
  }
  sortDirection = 'DSC';
 } else {

     
     if (field === 'wins') {
      teams = allTeams.sort((a, b) => a.Wins - b.Wins)

   } else if (field === 'Percentage') {
      teams = allTeams.sort((a, b) => a.Percentage - b.Percentage)

   }else if (field === 'ties') {
    teams = allTeams.sort((a, b) => a.Ties - b.Ties)
 }  else if (field === "losses") {
      teams = allTeams.sort((a, b) => a.Losses - b.Losses)
   } else if (field === "team") {
      teams = allTeams.sort((a, b) => b.Name.localeCompare(a.Name))
   }else if (field === 'pf') {
    teams = allTeams.sort((a, b) => a.PointsFor - b.PointsFor)
  }else if (field === 'pa') {
    teams = allTeams.sort((a, b) => a.PointsAgainst - b.PointsAgainst)
  }
   sortDirection = 'ASC';
  }


  
        },
  getHomeRecord(teamName){
  let wins = 0;
let losses = 0;
 let teams = [];
 teams = gjson.filter(game => (game.HomeTeam === teamName));
 teams.forEach(game => {
   
  let winHome =(game.HomeScore > game.AwayScore);
   
   if(winHome){
   wins++;
   } else{
    losses++;
   }
   
 });
 
 return wins +'-' + losses;
  },
  getAwayRecord(teamName){
  let wins = 0;
let losses = 0;
 let teams = [];
 teams = gjson.filter(game => (game.AwayTeam === teamName));
 teams.forEach(game => {
   
  let winAway =(game.HomeScore < game.AwayScore);
   
   if(winAway){
   wins++;
   } else{
    losses++;
   }
   
 });
 
 return wins +'-' + losses;
  },
  getStrk(teamName){

  let Wstreak = 0;
  let Lstreak = 0; 
   let teams = gjson.filter(game => ((game.AwayTeam === teamName)|| (game.HomeTeam === teamName)));
 teams.forEach(game => {
   
  let winHome = (game.HomeTeam === teamName)&& (game.HomeScore > game.AwayScore);
  let winAway = (game.AwayTeam === teamName)&& (game.HomeScore < game.AwayScore);
   
   if(winHome|| winAway){
    Wstreak++;
    Lstreak=0;
   } else{
  Lstreak++;
  Wstreak =0;
   }
   
 });
 
 if(Wstreak != 0)
   return 'W'+ Wstreak;
   else
   return 'L' + Lstreak;
},


  }
}
</script>

<style scoped>
img {
  display: inline;
  float: left;
}

</style>