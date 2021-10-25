
async function getGameData() {

    const res = await fetch('games.json');

    const data = await res.json();

    return data;

}

async function getStandings() {

    const res = await fetch('teams.json');

    const data = await res.json();

    return data;

}

let allGames = [];
let games = [];

let allTeams = [];
let teams = [];
let currentWeek = 1; 



function convertName(nTeam){
    let Tname = ' ';
allTeams.forEach(team => {
    
    if(team.Team === nTeam){
        Tname =  team.Name
        
    }
})

return Tname;
}

function changeWeek(week){
    
    games.forEach(game => {
        let section = document.getElementById('sections');
        let cards = document.getElementById('card');
        section.removeChild(cards);
        
    });
   
    
    currentWeek = week;
    console.log(currentWeek);
    createSchedule();
}
function initImage(nTeam ) {
    img = '';
    allTeams.forEach(team =>{
        if(team.Team === nTeam){
            img = team.Logo;
            
        }
    })
    return img;
  } 
function createTable(game){
    let table = document.createElement('table');
    table.className = 'table text-dark table-bordered table-striped text-center ';
    let thead = table.appendChild(document.createElement('thead'));
    let row = table.appendChild(document.createElement('tr'));
    row.className = 'font-weight-bold';
    let header = document.createElement('th');
    header.innerText = 'Team';
    row.appendChild(header);
    header = document.createElement('th');
    header.innerText = 'Q1';
    row.appendChild(header);
    header = document.createElement('th');
    header.innerText = 'Q2';
    row.appendChild(header);
    header = document.createElement('th');
    header.innerText = 'Q3';
    row.appendChild(header);
    header = document.createElement('th');
    header.innerText = 'Q4';
    row.appendChild(header);
    header = document.createElement('th');
    header.innerText = 'OT';
    row.appendChild(header);
    header = document.createElement('th');
    header.innerText = 'Total';
    row.appendChild(header);

    thead.appendChild(row);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    row = tbody.appendChild(document.createElement('tr'));
    let newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeTeam));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeScoreQuarter1));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeScoreQuarter2));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeScoreQuarter3));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeScoreQuarter4));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeScoreOvertime));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.HomeScore));
    row.appendChild(newCell);

    row = tbody.appendChild(document.createElement('tr'));
     newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayTeam));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayScoreQuarter1));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayScoreQuarter2));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayScoreQuarter3));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayScoreQuarter4));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayScoreOvertime));
    row.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(game.AwayScore));
    row.appendChild(newCell);
    
    return table;
}



function createCard(game) {
    let newRow = document.createElement('tr');
    newRow.setAttribute('id', 'card');

    let card = document.createElement('div');
    card.className = 'card text-dark bg-white mb-3';

    let score = document.createElement('h1');
    score.innerText =  game.HomeScore + "  -  " + game.AwayScore ;
    score.className = 'card-title text-center pt-lg-5 '

    let hTeam = document.createElement('div')
    hTeam.className = "card float-left d-inline p-2 font-weight-bold"
    let tbody = document.createElement('div')
    tbody.className = 'card-body';
    tbody.innerText = convertName(game.HomeTeam);
    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = initImage(game.HomeTeam);
    hTeam.appendChild(img);
    hTeam.appendChild(tbody);


    let aTeam = document.createElement('div')
    aTeam.className = "card float-right p-2 font-weight-bold"
     tbody = document.createElement('div')
    tbody.className = 'card-body';
    tbody.innerText = convertName(game.AwayTeam);
    img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = initImage(game.AwayTeam);
    aTeam.appendChild(img);
    aTeam.appendChild(tbody);

    
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';


  
    let title = document.createElement('h6');
    title.innerText = 'Week ' + game.Week + ': ' + convertName(game.HomeTeam) + ' (Home)    vs    ' + convertName(game.AwayTeam) + " (Away)";
    title.className = 'card-header';

    let container = document.createElement('div');
    container.className = 'container p-4';
   
    let gridrow = document.createElement('div')
    gridrow.className = 'row';
    container.appendChild(gridrow);

    let grid = document.createElement('div');
    grid.className ='col-sm';
    grid.appendChild(hTeam);
    gridrow.appendChild(grid);
    grid = document.createElement('div');
    grid.className ='col-sm';
    grid.appendChild(score);
    gridrow.appendChild(grid);
    grid = document.createElement('div');
    grid.className ='col-sm';
    grid.appendChild(aTeam);
    gridrow.appendChild(grid);
    
    

    cardBody.appendChild(title);
    cardBody.appendChild(container);
    cardBody.appendChild(createTable(game));
    card.appendChild(cardBody);
    newRow.appendChild(card);
    return newRow;
}

function createSchedule() {
    games = allGames.filter(game => (game.Week == currentWeek))
    console.log(games);
    games.forEach(game => {
        let row = createCard(game); document.querySelector('#sections').appendChild(row);

    })

}

function initTeams(){
    allTeams = teams;
}

function initGames(){
    allGames = games; 
}

getStandings().then(data => { teams = data; allTeams = teams; initTeams() });
getGameData().then(data => { games = data; allGames = games; initGames(); createSchedule() })


