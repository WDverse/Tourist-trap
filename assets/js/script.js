
function getHotel(lat) {

    var apiKey = 'fsq37w8dUN6194EZq28wvpwF7CQ3pCaNe8lPlAzGIEymFyw='
    var hotelEl = document.getElementById("hotels");

    var requestUrl = "https://api.foursquare.com/v3/places/search?query=hotel&ll=" + lat;
    fetch(requestUrl, {
        headers: {
            Accept: "application/json",
            Authorization: apiKey,
            'Access-Control-Allow-Origin': '*',
        }
    })

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < 10; i++) {
                console.log(data.results[i].name);
                console.log(data.results[i].location.address);
                var hotelsDiv = document.createElement("div");
                hotelsDiv.classList.add("hotels-div");
                var hotelInfoEl = document.createElement("ul");
                hotelInfoEl.classList.add("hotel-info");
                var hotelName = document.createElement("li");
                var hotelAddress = document.createElement("li");
                hotelAddress.classList.add("hotel-address");
                hotelName.textContent = data.results[i].name;
                hotelAddress.textContent = data.results[i].location.address;
                hotelInfoEl.appendChild(hotelName);
                hotelInfoEl.appendChild(hotelAddress);
                hotelsDiv.appendChild(hotelInfoEl);
                hotelEl.appendChild(hotelsDiv);
            }
            console.log(data)
        })

}
// function getApi() {

// }

// searchButton.addEventListener("click", getApi);
