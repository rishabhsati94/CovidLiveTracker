
const url = `https://api.covid19india.org/data.json`;

async function updateMap() {

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data['statewise'].length);

    let tabVal = document.getElementById('tabVal');

    for (let i = 1; i < (data['statewise'].length); i++) {

        let row = tabVal.insertRow();

        row.insertCell(0);
        
        tabVal.rows[i].cells[0].innerHTML = data['statewise'][i - 1]['state'];
        tabVal.rows[i].cells[0].style.background = '#7a4a91';
        tabVal.rows[i].cells[0].style.color = '#fff';

        row.insertCell(1);
        tabVal.rows[i].cells[1].innerHTML = data['statewise'][i - 1]['deaths'];
        tabVal.rows[i].cells[1].style.background = '#4bb7d8';

        row.insertCell(2);
        tabVal.rows[i].cells[2].innerHTML = data['statewise'][i - 1]['active'];
        tabVal.rows[i].cells[2].style.background = '#4bb7d8';

        row.insertCell(3);
        tabVal.rows[i].cells[3].innerHTML = data['statewise'][i - 1]['confirmed'];
        tabVal.rows[i].cells[3].style.background = '#f36e23';

        row.insertCell(4);
        tabVal.rows[i].cells[4].innerHTML = data['statewise'][i - 1]['recovered'];
        tabVal.rows[i].cells[4].style.background = '#4bb7d8';

        row.insertCell(5);
        tabVal.rows[i].cells[5].innerHTML = data['statewise'][i - 1]['lastupdatedtime'];
        tabVal.rows[i].cells[5].style.background = '#9cc850';

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
