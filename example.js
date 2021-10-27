const teamString = localStorage.getItem('storedTeams');
let allTeams = teamString != null ? JSON.parse(teamString) : JSON.parse(teamData);


const allGamesString = localStorage.getItem('storedAllGames');
let allGames = allGamesString != null ? JSON.parse(allGamesString) : JSON.parse(gameData).filter(game => (game.Status !== "Canceled" && game.Status !== "Postponed"));;

/*const gameString = localStorage.getItem('storedGames');
let games = gameString != null ? JSON.parse(gameString) : JSON.parse(gameData);*/

const currentTeamString = localStorage.getItem('storedCurrentTeam');
let currentTeam = currentTeamString != null ? JSON.parse(currentTeamString) : 'all';



let teamsPerPage = 40;

sortGames();

function sortGames() {
    allGames.sort((a, b) => Date.parse(b.Day) - Date.parse(a.Day));
}
let pageNum = 1;

let filteredPage = allTeams.slice(pageNum * teamsPerPage - teamsPerPage, pageNum * teamsPerPage);

/*
try {
    const gameString = localStorage.getItem('storedGames');
    allGames = JSON.parse(gameString);
} catch (SyntaxError) {
    allGames = JSON.parse(gameData);
}*/

let teams = allTeams;
let gamesPerPage = 10;
//let test = games[1];
//newGame(test);



// So we can filter out teams without loosing them (allTeams always has every team)

let currentSortField = 'Wins';
let sortDirection = 'ASC';


function createStandings() {
    try {
        document.querySelector('#rows').innerHTML = '';
        filteredPage.forEach(team => {
            let row = createRow(team);
            document.querySelector('#rows').appendChild(row);
        });
    } catch (TypeError) {}
}

function setCurrentTeam(teamName) {
    allTeams.forEach(team => {
        if (team.Name === teamName) currentTeam = team.Key;
    });
    storeData();
}

function createRow(team) {
    let thisTeam = team;
    let newRow = document.createElement('tr');
    newRow.setAttribute('scope', 'row');
    let newCell = document.createElement('td');
    let link = document.createElement('a');
    link.appendChild(document.createTextNode(team.Name));
    link.style = "color:black";
    link.setAttribute('onclick', ' setCurrentTeam(this.innerHTML);');
    link.setAttribute('href', '/games.html');

    newCell.appendChild(link);
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Wins));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Losses));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.Wins + team.Losses));
    newRow.appendChild(newCell);

    return newRow;
}

function sort(field) {
    if (field === undefined) {
        field = currentSortField;
        //Called from filter teams
    } else if (field === currentSortField) {
        sortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC';
    } else {
        sortDirection = 'ASC';
        currentSortField = field;
    }
    if (sortDirection === 'ASC') {
        if (field === 'team') {
            teams = allTeams.sort((a, b) => a.Name.localeCompare(b.Name) > 0 ? 1 : -1);
        } else if (field === 'wins') {
            teams = allTeams.sort((a, b) => a.Wins - b.Wins);
        } else if (field === 'losses') {
            teams = allTeams.sort((a, b) => a.Losses - b.Losses);
        } else {
            teams = allTeams.sort((a, b) => (a.Wins + a.Losses) - (b.Wins + b.Losses));
        }
    } else {
        if (field === 'team') {
            teams = allTeams.sort((a, b) => a.Name.localeCompare(b.Name) < 0 ? 1 : -1);
        } else if (field === 'wins') {
            teams = allTeams.sort((a, b) => b.Wins - a.Wins);
        } else if (field === 'losses') {
            teams = allTeams.sort((a, b) => b.Losses - a.Losses);
        } else {
            teams = allTeams.sort((a, b) => (b.Wins + b.Losses) - (a.Wins + a.Losses));
        }
    }
    createStandings();
}


function filterTeams() {
    let filterValue = document.querySelector('#filter').value;
    filteredPage = allTeams.filter(team => (team.Name.toLowerCase().indexOf(filterValue) != -1));
    for (let i = 0; i < allTeams.length; i++) {}
    sort(); // field in sort will be undefined
}

/*displayGame(games[898]);
displayGame(games[2]);
displayGame(games[2]);
displayGame(games[406]);*/

//displayGame(games[1000]);
//displayGame(games[1001]);

//sortByTeam("VAN");
//createGames();
//createButtons();

function sortByTeam() {
    try {
        games = [];
        if (currentTeam != 'all') {
            allGames.forEach(game => {
                if (game.HomeTeam === currentTeam || game.AwayTeam === currentTeam) games.push(game);
            });
        }

        createGames();
        createButtons();
    } catch (TypeError) {};
}

function getKey(teamName) {
    let key;
    allTeams.forEach(team => { if (team.Name === teamName) key = team.Key });
    return key;
}


sortByTeam();

function pageDown() {
    pageNum = pageNum > 1 ? pageNum -= 1 : pageNum;
    createGames();
    createButtons();
}

function pageUp() {
    pageNum = pageNum < 12 ? pageNum += 1 : pageNum;
    createGames();
    createButtons();
}

function goToPage(element) {
    pageNum = parseInt(element.value);
    createGames();
}

function createGames() {
    let displayedGames = document.querySelectorAll('.side-by-side');
    displayedGames.forEach(element => {
        element.remove();
    });
    let displayedDates = document.querySelectorAll('.date');
    displayedDates.forEach(element => {
        element.remove();
    });

    // thinys.remove();
    //  document.querySelectorAll('.date').remove();
    display = games.slice(((pageNum * gamesPerPage) - gamesPerPage), (pageNum * gamesPerPage));
    display.forEach(game => {
        displayGame(game);
    });
}

createGames();


/*
<select id="newTeamDivision" class="form-control">
    <option selected disabled>Choose Division ...</option><option>Metropolitan</option>
    <option>Atlantic</option><option>Central</option><option>Pacific</option>
</select>
*/
//Creates page buttons at bottom of screen
function createButtons() {
    let maxPage = Math.ceil(games.length / gamesPerPage);
    let input = document.querySelector('#pageNum');
    for (let i = 0; i < maxPage; i++) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(i + 1));
        if (i === pageNum - 1) option.selected = 'selected';
        input.appendChild(option);
    }

    ofTotal = document.querySelector('#ofTotal');
    let ofTotalText = document.createElement('p');
    ofTotalText.appendChild(document.createTextNode(` of ${Math.ceil(games.length/gamesPerPage)}`));
    ofTotalText.className = 'ofTotal d-inline';
    oldOfTotal = document.querySelector('.ofTotal');
    if (oldOfTotal !== null) ofTotal.replaceChild(ofTotalText, oldOfTotal);
    else ofTotal.appendChild(ofTotalText);

    let LeftArrow = document.querySelector('#leftArrow');
    if (pageNum === 1) LeftArrow.disabled = true;
    else LeftArrow.disabled = false;

    let rightArrow = document.querySelector('#rightArrow');
    if (pageNum === maxPage) rightArrow.disabled = true;
    else rightArrow.disabled = false;

}

function displayGame(game) {
    try {
        let homeTeam;
        teams.forEach(team => {
            if (team.Key === game.HomeTeam) homeTeam = team;
        });

        let awayTeam
        teams.forEach(team => {
            if (team.Key === game.AwayTeam) awayTeam = team;
        });

        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let month = monthNames[parseInt(game.Day.substring(5, 7)) - 1];
        let day = game.Day.substring(8, 10);
        let year = game.Day.substring(0, 4);
        let date = document.createElement('h3');
        date.className = "date border border-left-0 border-right-0 border-top-0 border-secondary py-3 bg-white m-0";
        date.style = "font-size: 26px; padding-left:25px;";
        date.appendChild(document.createTextNode(`${month}, ${day} - ${year}`));
        let sideBySide = document.createElement('div');
        sideBySide.className = "d-flex side-by-side";

        let box1 = document.createElement('ul');
        box1.className = "bg-white p-0 m-0 border border-left-0 border-right-0 border-top-0 border-secondary teams-scores";
        box1.style = "height:187px; width:100%;";

        let section1 = document.createElement('li');
        section1.style = "list-style:none; align-self:center;";

        let space = document.createElement('div');
        space.className = "mb-5 space";
        space.style = "width:500px;";
        space.appendChild(something(homeTeam, game));
        space.appendChild(something(awayTeam, game));
        box1.appendChild(space);
        sideBySide.appendChild(box1);

        let box2 = document.createElement('ul');
        box2.className = "bg-white d-flex p-0 m-0 border border-secondary border-left-0 border-top-0 border-right-0";
        box2.style = "height:187px; width:100%; justify-content: center; align-items: center;";

        let grid3 = document.createElement('div');
        grid3.className = "d-flex";

        let li1 = document.createElement('li');
        li1.style = "list-style:none; align-self:center;";
        let gameStatus = "Final";
        if (game.Status === "F/OT") gameStatus += "/OT"
        else if (game.Status === "F/SO") gameStatus += "/SO"
        let status = document.createElement('p');
        if (gameStatus !== "Final") status.className = "mb-0 ml-3 mr-5";
        else status.className = "mb-0 mx-5";

        status.appendChild(document.createTextNode(gameStatus));
        status.style = "font-size:22px; ";
        li1.appendChild(status);
        grid3.appendChild(li1);

        let li2 = document.createElement('li');
        li2.style = "list-style:none; align-self:center;";
        let line = document.createElement('div');
        line.className = "bg-secondary";
        line.style = "width:4px; height:75px;";
        li2.appendChild(line);
        grid3.appendChild(li2);

        let li3 = document.createElement('li');
        li3.className = "ml-3 mt-1";
        li3.style = "list-style:none; align-self:center;";
        let division1 = document.createElement('p');
        division1.appendChild(document.createTextNode(`Division: ${homeTeam.Division}`));
        li3.appendChild(division1);
        let division2 = document.createElement('p');
        division2.appendChild(document.createTextNode(`Division: ${awayTeam.Division}`));
        li3.appendChild(division2);
        grid3.appendChild(li3);

        box2.appendChild(grid3);
        sideBySide.appendChild(box2);

        let container = document.querySelector('#games');
        let prevDate = document.querySelector('.date:last-of-type')
        let prevDateText = prevDate != null ? prevDate.innerHTML : '';
        if (prevDateText != date.innerHTML) container.appendChild(date);
        container.appendChild(sideBySide);

    } catch (TypeError) {};
}

function something(team, game) {
    let grid = document.createElement('div');
    grid.className = "d-flex";

    let div = document.createElement('div');

    let name = document.createElement('h4');
    name.appendChild(document.createTextNode(team.Name));
    name.className = 'mx-4 mt-3';

    let record = document.createElement('p');
    record.appendChild(document.createTextNode(`(${team.Wins} - ${team.Losses})`));
    record.className = 'text-muted mx-4';

    div.appendChild(name);
    div.appendChild(record);
    grid.appendChild(div);

    let score = document.createElement('h1');

    let text = game.HomeTeam === team.Key ? game.HomeTeamScore : game.AwayTeamScore;

    score.appendChild(document.createTextNode(text));
    score.className = "score mt-3 ml-auto mx-5";

    grid.appendChild(score);
    return grid;
}

createStandings();

//Attempts to add a new team, displays error messages if inputs are not filled out correctly
function newTeam() {
    let newTeamName = document.querySelector('#newTeamName').value;
    let newTeamWins = document.querySelector('#newTeamWins').value;
    let newTeamLosses = document.querySelector('#newTeamLosses').value;
    let newTeamDivision = document.querySelector('#newTeamDivision').value;

    let error = document.querySelector('.errorMsg');
    if (error != null) error.remove();

    let same;
    allTeams.forEach(team => { if (team.Name === newTeamName) same = true });
    //display error message if all fields are not filled out
    if (newTeamName == '' || newTeamWins == '' || newTeamLosses == '' || newTeamDivision == 'Choose Division ...') {
        let enterAllFields = createErrorMsg('Error: Please Fill Out All Required Fields');
        let container = document.querySelector('form .container');
        let enterNewTeam = document.querySelector('#test7');
        container.insertBefore(enterAllFields, enterNewTeam);
        //display error message if team with that name already exists
    } else if (same) {
        let sameName = createErrorMsg('Error: Team With That Name Already Exists');
        let container = document.querySelector('form .container');
        let enterNewTeam = document.querySelector('#test7');
        container.insertBefore(sameName, enterNewTeam);
    } else {
        //Creates new Team
        thisTeam = {
                Name: newTeamName,
                Wins: parseInt(newTeamWins),
                Losses: parseInt(newTeamLosses),
                Division: newTeamDivision,
                Key: newTeamName.substring(0, 3)
            }
            //Clears out inputs
        document.querySelector('#newTeamName').value = "";
        document.querySelector('#newTeamWins').value = "";
        document.querySelector('#newTeamLosses').value = "";
        document.querySelector('#newTeamDivision').value = "Choose Division ...";

        allTeams.push(thisTeam);
        storeData();
    }
}

function newGame() {
    let hTeamName = document.querySelector('#homeTeamName').value;
    let aTeamName = document.querySelector('#awayTeamName').value;
    let hScore = document.querySelector('#homeScore').value;
    let aScore = document.querySelector('#awayScore').value;
    let date = document.querySelector('#date').value;
    let OT = document.querySelector('#OT').checked;
    let SO = document.querySelector('#SO').checked;
    let status;

    if (OT === true) status = "F/OT";
    else if (SO === true) status = "F/SO"
    else status = "final";


    let error = document.querySelector('.errorMsg');
    if (error != null) error.remove();

    let container = document.querySelector('#addGame');
    let row1 = document.querySelector('#row1');

    let homeTeam;
    teams.forEach(team => {
        if (team.Name === hTeamName) homeTeam = team;
    });

    let awayTeam
    teams.forEach(team => {
        if (team.Name === aTeamName) awayTeam = team;
    });

    //Updates overall stats for the teams
    if (hScore > aScore) {
        homeTeam.Wins += 1;
        awayTeam.Losses += 1;
    } else {
        awayTeam.Wins += 1;
        homeTeam.Losses += 1;
    }

    let today = new Date();
    // Displays an error message if: 
    //a field is left empty
    if (hTeamName === '' || aTeamName === '' || hScore === '' || aScore === '' || date === '' || OT === '') {
        let enterAllFields = createErrorMsg('Error: Please Fill Out All Required Fields');
        container.insertBefore(enterAllFields, row1);
    }
    //a valid team is not imputed 
    else if (homeTeam === undefined || awayTeam === undefined) {
        container.insertBefore(createErrorMsg('Error: Team Not Found'), row1);
    }
    //a valid date is not imputed 
    else if (isNaN(Date.parse(date)) || Date.parse(today) < Date.parse(date) || date.length != 10) {
        container.insertBefore(createErrorMsg('Error: Enter a Valid Date'), row1);
    }
    //Creates a new game
    else {
        let game = {
            HomeTeam: homeTeam.Key,
            AwayTeam: awayTeam.Key,
            AwayTeamScore: aScore,
            HomeTeamScore: hScore,
            Day: date,
            Status: status
        }
        let test;
        let i;
        allGames.push(game);
        sortGames();
        storeData();
        //Emptys input
        document.querySelector('#homeTeamName').value = '';
        document.querySelector('#awayTeamName').value = '';
        document.querySelector('#homeScore').value = '';
        document.querySelector('#awayScore').value = '';
        document.querySelector('#date').value = '';
        document.querySelector('#OT').checked = false;
    }
}

//Creates a text element with the style of an error from given text
function createErrorMsg(msg) {
    let enterAllFields = document.createElement('h4');
    enterAllFields.appendChild(document.createTextNode(msg));
    enterAllFields.className = 'text-danger errorMsg pt-3 pl-2';
    return enterAllFields;
}


//Stores teams and games variables in local storage so they can be accessed on different pages
function storeData() {
    localStorage.setItem('storedTeams', JSON.stringify(allTeams));

    console.log("storing");
    localStorage.setItem('storedAllGames', JSON.stringify(allGames));
    localStorage.setItem('storedGames', JSON.stringify(allTeams));
    localStorage.setItem('storedCurrentTeam', JSON.stringify(currentTeam));
}

