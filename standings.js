


let current = 1;


async function getStandings() {

    const res = await fetch('teams.json');

    const data = await res.json();

    return data;

}



let teams = [];

let allTeams = [];

let filteredTeams = [];





   

    // creates a new row for each team
/*
    teams.forEach(team => {
        
      if(team.Conference.localeCompare(currentConference) == 0){
        let output = createRow(team);
        console.log(team.Name);
        document.querySelector('#output').appendChild(output);
      }
    })

*/

function createStandings(currentConference, currentDivision) {
    document.querySelector('#rows').innerHTML = '';
    teams.forEach(team => { 
      if(team.Conference.localeCompare(currentConference) ==0 && team.Division.localeCompare(currentDivision)==0){
        console.log(team.Name);
        console.log(team.Division);
        console.log(team.Conference);
      let row = createRow(team); document.querySelector('#rows').appendChild(row); 
      } else if(currentConference.valueOf() == null){
        let row = createRow(team); document.querySelector('#rows').appendChild(row); 
      }
    });
}
function createRow(team) {
    let newRow = document.createElement('tr');
    newRow.setAttribute('scope', 'row');
    let newCell = document.createElement('td');
    newCell.appendChild(initImage(team.Logo));
    newRow.appendChild(newCell);
    newCell.appendChild(document.createTextNode(team.Name));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Wins));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Losses));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Ties));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Percentage));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.PointsFor));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.PointsAgainst));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.ConferenceWins +"-"+ team.ConferenceLosses));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.DivisionWins + "-" + team.DivisionLosses));
    newRow.appendChild(newCell);
    return newRow;
}

function initStandings(Conference, Division){
getStandings().then(data => { teams = data; allTeams = teams; createStandings(Conference,Division); });

document.querySelector(".title").textContent= Conference + " " + Division;

}

function sortStandings(){
  teams.sort((a,b) => a-b)
}

/*
 const teamsData =  fetch('teams.json')
    .then((res) => res.json())
    .then((data) => {
        return data;
    })
    
    
    const printTeams = async () => {
        const a = await teamsData;
        console.log(a);
        
        
      };

    const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  return a;
};


*/
     
function initImage(source) {
  var img = document.createElement('img'); 
  img.src = source;
  img.style.margin = '5px';
  img.style.width = '30px';
  img.style.height = '20px';
  return img;
  
} 



//createStandings(1);