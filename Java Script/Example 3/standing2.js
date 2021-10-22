let teams = [{ name: 'Tampa Bay', wins: 100, losses: 62, GB: 0 },
{ name: 'New York', wins: 92, losses: 70, GB: 8.0 },
{ name: 'Boston', wins: 92, losses: 70, GB: 8.0 },
{ name: 'Toronto', wins: 91, losses: 71, GB: 9.0 },
{ name: 'Baltimore', wins: 52, losses: 110, GB: 48.0 }
];


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





createStandings();