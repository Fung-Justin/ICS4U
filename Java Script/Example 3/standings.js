const allTeams = [{ name: 'Tampa Bay', wins: 100, losses: 62, GB: 0 },
{ name: 'New York', wins: 92, losses: 70, GB: 8.0 },
{ name: 'Boston', wins: 92, losses: 70, GB: 8.0 },
{ name: 'Toronto', wins: 91, losses: 71, GB: 9.0 },
{ name: 'Baltimore', wins: 52, losses: 110, GB: 48.0 }
];

let teams = allTeams;

let currentSortField = 'GB';
let sortDirection = 'ASC';


function createStandings() {
   document.querySelector('#rows').innerHTML = '';
   teams.forEach(team => { let row = createRow(team); document.querySelector('#rows').appendChild(row); });
}

function createRow(team) {
   let newRow = document.createElement('tr');
   newRow.setAttribute('scope', 'row');
   let newCell = document.createElement('td');
   newCell.appendChild(document.createTextNode(team.name));
   newRow.appendChild(newCell);
   newCell = document.createElement('td');
   newCell.appendChild(document.createTextNode(team.wins));
   newRow.appendChild(newCell);
   newCell = document.createElement('td');
   newCell.appendChild(document.createTextNode(team.losses));
   newRow.appendChild(newCell);
   newCell = document.createElement('td');
   newCell.appendChild(document.createTextNode(team.GB));
   newRow.appendChild(newCell);

   return newRow;
}

function createStandings() {
   document.querySelector('#rows').innerHTML = '';
   teams.forEach(team => { let row = createRow(team); document.querySelector('#rows').appendChild(row); });
}


function sort(field) {

   if (sortDirection == 'ASC') {

      if (field === 'wins') {
         teams = allTeams.sort((a, b) => a.wins - b.wins)

      } else if (field === 'GB') {
         teams = allTeams.sort((a, b) => a.GB - b.GB)

      } else if (field === "losses") {
         teams = allTeams.sort((a, b) => a.losses - b.losses)
      } else if (field === "team") {
         teams = allTeams.sort((a, b) => a.name.localeCompare(b.name))
      }

   } else {

      if (field === 'wins') {
         teams = allTeams.sort((a, b) => b.wins - a.wins)

      } else if (field === 'GB') {
         teams = allTeams.sort((a, b) => b.GB - a.GB)

      } else if (field === 'losses') {
         teams = allTeams.sort((a, b) => b.losses - a.losses)
      } else if (field === 'team') {
         teams = allTeams.sort((a, b) => b.name.localeCompare(a.name))
      }

   }

   createStandings();

}

function filterTeams() {
   let filtervalue = document.querySelector('#filter').value;
   teams = allTeams.filter(team => (team.name.indexOf(filterValue) >= 0))
   sort();
}




createStandings();