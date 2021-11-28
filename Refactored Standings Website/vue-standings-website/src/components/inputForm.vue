<template>
     <form>
    <div class="row">
      <div class="col">
      <label for="week"> Week</label>
      <select class="form-select" id="week">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
   

      </select>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="AwayTeam"> Home Team</label>
        <select class="form-select" id="homeTeam">
          <option value="ARI">ARI</option>
          <option value="ATL">ATL</option>
          <option value="BAL">BAL</option>
          <option value="BUF">BUF</option>
          <option value="CAR">CAR</option>
          <option value="CHI">CHI</option>
          <option value="CIN">CIN</option>
          <option value="CLE">CLE</option>
          <option value="DAL">DAL</option>
          <option value="DEN">DEN</option>
          <option value="DET">DET</option>
          <option value="GB">GB</option>
          <option value="HOU">HOU</option>
          <option value="IND">IND</option>
          <option value="JAC">JAC</option>
          <option value="KC">KC</option>
          <option value="LV">LV</option>
          <option value="LAC">LAC</option>
          <option value="LAR">LAR</option>
          <option value="MIA">MIA</option>
          <option value="MIN">MIN</option>
          <option value="NE">NE</option>
          <option value="NO">NO</option>
          <option value="NYG">NYG</option>
          <option value="NYJ">NYG</option>
          <option value="PHI">PHI</option>
          <option value="PIT">PIT</option>
          <option value="SF">SF</option>
          <option value="SEA">SEA</option>
          <option value="TB">TB</option>
          <option value="TEN">TEN</option>
          <option value="WAS">WAS</option>

        </select>
      </div>
      <div class="col">
        <label for="homeTeam"> Away Team</label>
        <select class="form-select" id="awayTeam" placeholder = "Home Team" >
          <option value="ARI">ARI</option>
          <option value="ATL">ATL</option>
          <option value="BAL">BAL</option>
          <option value="BUF">BUF</option>
          <option value="CAR">CAR</option>
          <option value="CHI">CHI</option>
          <option value="CIN">CIN</option>
          <option value="CLE">CLE</option>
          <option value="DAL">DAL</option>
          <option value="DEN">DEN</option>
          <option value="DET">DET</option>
          <option value="GB">GB</option>
          <option value="HOU">HOU</option>
          <option value="IND">IND</option>
          <option value="JAC">JAC</option>
          <option value="KC">KC</option>
          <option value="LV">LV</option>
          <option value="LAC">LAC</option>
          <option value="LAR">LAR</option>
          <option value="MIA">MIA</option>
          <option value="MIN">MIN</option>
          <option value="NE">NE</option>
          <option value="NO">NO</option>
          <option value="NYG">NYG</option>
          <option value="NYJ">NYG</option>
          <option value="PHI">PHI</option>
          <option value="PIT">PIT</option>
          <option value="SF">SF</option>
          <option value="SEA">SEA</option>
          <option value="TB">TB</option>
          <option value="TEN">TEN</option>
          <option value="WAS">WAS</option>

        </select>
      </div>
    </div>

    <div class="row">
        <div class="col">
          <label for="hScore">Home Score</label>
          <input type="text" class="form-control" id="hScore" placeholder="Home Score">
        </div>
        <div class="col">
          <label for="aScore">Away Score</label>
          <input type="text" class="form-control" id="aScore" placeholder="Away Score">
        </div>
    
        

      
      
      <div class="row mb-3">
        <div class="col">
          <label for="hQ1">  Home Points Scored Q1 </label>
          <input type="text" class="form-control p-1" id="hQ1" placeholder="Home Score">
        </div>
        <div class="col">
          <label for="hQ2">  Home Points Scored Q2 </label>
          <input type="text" class="form-control p-1" id="hQ2" placeholder="Home Score">
        </div>
          <div class="col">
            <label for="hQ3">  Home Points Scored Q3 </label>
          <input type="text" class="form-control p-1" id="hQ3" placeholder="Home Score">
          </div>
          <div class="col">
            <label for="hQ4">  Home Points Scored Q4 </label>
          <input type="text" class="form-control p-1" id="hQ4" placeholder="Home Score">
          </div>
          
        </div>
        <div class="row">
          <div class="col">
            <label for="aQ1">  Away Points Scored Q1 </label>
            <input type="text" class="form-control p-1" id="aQ1" placeholder="Away Score">
          </div>
          <div class="col">
            <label for="aQ2">  Away Points Scored Q2 </label>
            <input type="text" class="form-control p-1" id="aQ2" placeholder="Away Score">
          </div>
            <div class="col">
              <label for="aQ3">  Away Points Scored Q3 </label>
            <input type="text" class="form-control p-1" id="aQ3" placeholder="Away Score">
            </div>
            <div class="col">
              <label for="aQ4">  Away Points Scored Q4 </label>
            <input type="text" class="form-control p-1" id="aQ4" placeholder="Away Score">
            </div>
        </div>
          
        </div>
        <div class="btn btn-primary btn-lg  mx-auto m-3" type = "button" @click="createGame()"> Submit</div>
    
      
    
    

    </form>
</template>

<script>
export default {
   name: "Input-Form",
   

   methods:{

       createGame(){
  let hOT = 0;
  let aOT =0;
  let Week =  document.querySelector('#week').value;
  let aTeam = document.querySelector('#awayTeam').value;
  let hTeam = document.querySelector('#homeTeam').value;
  let hScore = parseInt(document.querySelector('#hScore').value);
  let aScore = parseInt(document.querySelector('#aScore').value);
  let hQ1 = parseInt(document.querySelector('#hQ1').value);
  let hQ2 = parseInt(document.querySelector('#hQ2').value);
  let hQ3 = parseInt(document.querySelector('#hQ3').value);
  let hQ4 = parseInt(document.querySelector('#hQ4').value);
  let aQ1 = parseInt(document.querySelector('#aQ1').value);
  let aQ2 = parseInt(document.querySelector('#aQ2').value);
  let aQ3 = parseInt( document.querySelector('#aQ3').value);
  let aQ4 = parseInt( document.querySelector('#aQ4').value);
   hOT = hScore -hQ1-hQ2-hQ3-hQ4;
   aOT = aScore - aQ1-aQ2-aQ3-aQ4;

  if( !isNaN(Week) && !isNaN(hScore) &&!isNaN(aScore)&&!isNaN(hQ1)&&!isNaN(hQ2)&&!isNaN(hQ3)&&!isNaN(hQ4)&&!isNaN(aQ1)&&!isNaN(aQ2)&&!isNaN(aQ3)&&!isNaN(aQ4)&& hOT >= 0 && aOT >= 0){
    let newGame = {
      Week: Week,
      HomeTeam: hTeam,
      AwayTeam: aTeam,
      AwayScore: aScore,
      HomeScore: hScore,
      AwayScoreQuarter1:aQ1,
     AwayScoreQuarter2:aQ2,
     AwayScoreQuarter3:aQ3,
     AwayScoreQuarter4:aQ4,
     AwayScoreOvertime:aOT,
     HomeScoreQuarter1:hQ1,
     HomeScoreQuarter2:hQ2,
     HomeScoreQuarter3:hQ3,
     HomeScoreQuarter4:hQ4,
     HomeScoreOvertime:hOT,
    }

  



     Week =  document.querySelector('#week').value;
     aTeam = document.querySelector('#awayTeam').value = ' ';
     hTeam = document.querySelector('#homeTeam').value= ' ';
     hScore = document.querySelector('#hScore').value= ' ';
     aScore = document.querySelector('#aScore').value= ' ';
     hQ1 = document.querySelector('#hQ1').value= ' ';
     hQ2 = document.querySelector('#hQ2').value = ' ';
     hQ3 = document.querySelector('#hQ3').value = ' ';
     hQ4 = document.querySelector('#hQ4').value = ' ';
     aQ1 = document.querySelector('#aQ1').value = ' ';
     aQ2 = document.querySelector('#aQ2').value = ' ';
     aQ3 = document.querySelector('#aQ3').value = ' ';
     aQ4 = document.querySelector('#aQ4').value = ' ';
     aOT = 0; 
     hOT = 0;
     console.log(newGame)

        this.$emit("addGame" , newGame);
        alert('New game has been added');
  } else{
    alert('please enter the correct information');
    
  }

},

   }
}
</script>
<style scoped>

</style>