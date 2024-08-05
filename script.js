// script.js

let leagueNameSet = false;

function addTeam() {
    const leagueName = document.getElementById("leagueName").value;
    const teamName = document.getElementById("teamName").value;
    const teamLogo = document.getElementById("teamLogo").files[0];
    const matches = document.getElementById("matches").value;
    const won = document.getElementById("won").value;
    const lost = document.getElementById("lost").value;
    const netRunRate = document.getElementById("netRunRate").value;
    const points = document.getElementById("points").value;

    if (!leagueNameSet) {
        document.getElementById("leagueTitle").innerText = leagueName;
        document.getElementById("leagueName").disabled = true;
        leagueNameSet = true;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const table = document.getElementById("statsTable").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const logoCell = newRow.insertCell(0);
        const teamCell = newRow.insertCell(1);
        const matchesCell = newRow.insertCell(2);
        const wonCell = newRow.insertCell(3);
        const lostCell = newRow.insertCell(4);
        const netRunRateCell = newRow.insertCell(5);
        const pointsCell = newRow.insertCell(6);

        const img = document.createElement('img');
        img.src = e.target.result;
        img.width = 50; // You can adjust the size
        logoCell.appendChild(img);

        teamCell.innerText = teamName;
        matchesCell.innerText = matches;
        wonCell.innerText = won;
        lostCell.innerText = lost;
        netRunRateCell.innerText = netRunRate;
        pointsCell.innerText = points;
    };
    reader.readAsDataURL(teamLogo);

    // Reset form fields
    document.getElementById("teamForm").reset();
}

function downloadTable() {
    const tableElement = document.getElementById("statsTable");
    
    html2canvas(tableElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = 'league_stats_table.png';
        link.click();
    });
}
