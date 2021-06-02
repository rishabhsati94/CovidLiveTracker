const url = `https://api.covid19api.com/summary`;

async function updateMap() {

    const response = await fetch(url);
    const data = await response.json();

    let tabVal = document.getElementById('tabVal');

    for (let i = 1; i < (data['Countries'].length); i++) {

        let row = tabVal.insertRow();

        row.insertCell(0);
        
        tabVal.rows[i].cells[0].innerHTML = data['Countries'][i - 1]['Country'];
        tabVal.rows[i].cells[0].style.background = '#7a4a91';
        tabVal.rows[i].cells[0].style.color = '#fff';

        row.insertCell(1);
        tabVal.rows[i].cells[1].innerHTML = data['Countries'][i - 1]['TotalConfirmed'];
        tabVal.rows[i].cells[1].style.background = '#4bb7d8';

        row.insertCell(2);
        tabVal.rows[i].cells[2].innerHTML = data['Countries'][i - 1]['TotalRecovered'];
        tabVal.rows[i].cells[2].style.background = '#4bb7d8';

        row.insertCell(3);
        tabVal.rows[i].cells[3].innerHTML = data['Countries'][i - 1]['TotalDeaths'];
        tabVal.rows[i].cells[3].style.background = '#f36e23';

        row.insertCell(4);
        tabVal.rows[i].cells[4].innerHTML = data['Countries'][i - 1]['NewConfirmed'];
        tabVal.rows[i].cells[4].style.background = '#4bb7d8';

        row.insertCell(5);
        tabVal.rows[i].cells[5].innerHTML = data['Countries'][i - 1]['NewRecovered'];
        tabVal.rows[i].cells[5].style.background = '#9cc850';

        row.insertCell(6);
        tabVal.rows[i].cells[6].innerHTML = data['Countries'][i - 1]['Date'];
        tabVal.rows[i].cells[6].style.background = '#f36e23';
    }

}
updateMap();
setInterval(function () {
    updateMap();
}, 1000000);

let search = document.getElementById('countryName');
search.addEventListener("input", function () {

    let inputVal = search.value.toUpperCase();

    let tabVal = document.getElementById('tabVal');

    let tr = tabVal.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {

        let td = tr[i].getElementsByTagName("td")[0];
        
        if (td) {
            let txtval = td.textContent || td.innerHTML;

            if (txtval.toUpperCase().indexOf(inputVal) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = 'none';
            }
        }
    }
    return false;
})
