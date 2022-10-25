
// find the desired selectors
var hot = document.getElementById('hot');
var iced = document.getElementById('iced');
var coffeeCard = document.getElementById('coffee-list');
var coffeeType = document.getElementById('coffee-type');

var coffeeListRequest = new XMLHttpRequest();
coffeeListRequest.onreadystatechange = function() {
    // check if the response data send back to us 
    if(coffeeListRequest.readyState === 4) {
        // coffeeCard.style.border = '1px solid #e8e8e8';
        // uncomment the line below to see the request
        // console.log(request);
        // check if the request is successful
        if(coffeeListRequest.status === 200) {
        // update the HTML of the element
            // coffeeCard.innerHTML = request.responseText;        
        } else {
        // otherwise display an error message
        coffeeCard.innerHTML = 'An error occurred during your request: ' +  coffeeListRequest.status + ' ' + coffeeListRequest.statusText;
        }
    }
}
var link = "https://api.sampleapis.com/coffee/iced";
DisplayCoffe(link);

hot.addEventListener('click', function() {
    coffeeType.innerHTML = "Hot";
    link = "https://api.sampleapis.com/coffee/hot";
    DisplayCoffe(link);
});

iced.addEventListener('click', function() {
    coffeeType.innerHTML = "Iced";
    link = "https://api.sampleapis.com/coffee/iced";
    DisplayCoffe(link);
});

function DisplayCoffe(link) {
    coffeeCard.innerHTML = "";
    coffeeListRequest.open('GET', link, true);
    coffeeListRequest.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (coffeeListRequest.status >= 200 && coffeeListRequest.status < 400) {
            data.forEach(coffee => {

                var div = document.createElement('div');
                div.className = "coffee-info-card"
                var title = document.createElement('h2');
                title.className = "coffee-info-title"
                var description = document.createElement('h3');
                description.className = "coffee-info-description"

                title.textContent = coffee.title;
                description.textContent = coffee.description;

                div.append(title);
                div.append(description);
                coffeeCard.append(div);         
            });
        } 
    }
    coffeeListRequest.send();
};
