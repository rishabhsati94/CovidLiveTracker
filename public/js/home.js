const url = `https://api.covid19api.com/summary`;

async function updateMap() {

    const response = await fetch(url);
    const data = await response.json();
    arrData = [data];
    let totalConfirmed = document.getElementById('TotalConfirmed');
    let total = arrData[0].Global.TotalConfirmed;
    totalConfirmed.innerText = total;
    
    let totalDeaths = document.getElementById('TotalDeaths');
    let die = arrData[0].Global.TotalDeaths;
    totalDeaths.innerText = die;

    let totalRecoverd = document.getElementById('TotalRecovered');
    let recoverd = arrData[0].Global.TotalRecovered;
    totalRecoverd.innerText = recoverd;

    let newConfirmed = document.getElementById('NewConfirmed');
    let latest = arrData[0].Global.NewConfirmed;
    newConfirmed.innerText = latest;
}

updateMap();

setInterval(function(){ 
    updateMap(); 
}, 1000000);