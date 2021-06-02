
const urlWorld = `https://api.covid19api.com/summary`;
const urlCntryLocation = `https://www.trackcorona.live/api/countries`;


async function trap() {

    const response = await fetch(urlWorld);
    const data = await response.json();
    // console.log('url world', data['Countries']);

    for (let i = 1; i < (data['Countries'].length); i++) {

        let cntryUrlWorld = data['Countries'][i - 1]['Country'];
        let newCasesUrlWorld = data['Countries'][i - 1]['NewConfirmed'];

        fetch(urlCntryLocation)
        .then(response => response.json())
        .then(res => {
            // console.log("url country", res.data);


            res.data.forEach(e => {
                let urlCntryLocation = e.location;

                if(cntryUrlWorld === urlCntryLocation ){
                    
                latitude = e.latitude;
                longitude = e.longitude;
                // console.log(cntryUrlWorld);
                // console.log(latitude);
                // console.log(longitude);
                // console.log(newCasesUrlWorld);

                if(newCasesUrlWorld > 255){
                    color = `rgb(255,0,0)`;
                }
                else{
                    color = `rgb(${newCasesUrlWorld},0,0)`;
                }

                //mark on the map 
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
                }

            });
        })
    }
}

trap();
setInterval(function () {
    trap();
}, 1000000);