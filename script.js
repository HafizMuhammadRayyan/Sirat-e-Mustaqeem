function getData() {

    // get city name
    let input = document.getElementById('city').value;

    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${input}&country=pakistan&method=1`)
        .then(function (response) {
            // handle success
            const data = response.data;
            console.log(data);

            // get prayer times
            let fajr = data.data.timings.Fajr;
            let sunrise = data.data.timings.Sunrise;
            let dhuhr = data.data.timings.Dhuhr;
            let asr = data.data.timings.Asr;
            let maghrib = data.data.timings.Maghrib;
            let isha = data.data.timings.Isha;
            console.log(fajr, sunrise, dhuhr, asr, maghrib, isha);
            // get date
            let date = data.data.date.readable;
            console.log(date);

            document.getElementById("fajr-time").innerHTML = fajr;
            document.getElementById("sunrise-time").innerHTML = sunrise;
            document.getElementById("zuhr-time").innerHTML = dhuhr;
            document.getElementById("asr-time").innerHTML = asr;
            document.getElementById("maghrib-time").innerHTML = maghrib;
            document.getElementById("isha-time").innerHTML = isha;

        })

}
// getData();
