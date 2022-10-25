// find the desired selectors
var search = document.getElementById('search');
let input = document.getElementById('input');
var coffeeItems = document.getElementById('coffee-items');

let all_coffee_file = [];

var notFound = document.createElement('h3');
var examples = document.createElement('h3');
examples.className = "search-example";

notFound.textContent = "No Coffee Found";
examples.textContent = "Examples 'Cold Brew', 'Expresso', 'Mocha'";

coffeeItems.append(examples);

function combine(file) {
    file.forEach(coffee => {
        all_coffee_file.push(coffee);
    });
    // console.log(all_coffee_file);
}


/************************ Hot Coffee ************************/

var coffeeHot = new XMLHttpRequest();
coffeeHot.onreadystatechange = function() {
    // check if the response data send back to us 
    if(coffeeHot.readyState === 4) {
        // coffeeCard.style.border = '1px solid #e8e8e8';
        // uncomment the line below to see the request
        // console.log(request);
        // check if the request is successful
        if(coffeeHot.status === 200) {
        // update the HTML of the element
            // coffeeCard.innerHTML = request.responseText;        
        } else {
        // otherwise display an error message
        coffeeItems.innerHTML = 'An error occurred during your request: ' +  coffeeHot.status + ' ' + coffeeHot.statusText;
        }
    }
}

coffeeHot.open('GET', "https://api.sampleapis.com/coffee/hot", true);
coffeeHot.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (coffeeHot.status >= 200 && coffeeHot.status < 400) {
        combine(data);
    } 
}
coffeeHot.send();


/************************ Ice Coffee ************************/

var coffeeCold = new XMLHttpRequest();
coffeeCold.onreadystatechange = function() {
    // check if the response data send back to us 
    if(coffeeCold.readyState === 4) {
        // coffeeCard.style.border = '1px solid #e8e8e8';
        // uncomment the line below to see the request
        // console.log(request);
        // check if the request is successful
        if(coffeeCold.status === 200) {
        // update the HTML of the element
            // coffeeCard.innerHTML = request.responseText;        
        } else {
        // otherwise display an error message
        coffeeItems.innerHTML = 'An error occurred during your request: ' +  coffeeCold.status + ' ' + coffeeCold.statusText;
        }
    }
}

coffeeCold.open('GET', "https://api.sampleapis.com/coffee/iced", true);
coffeeCold.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (coffeeCold.status >= 200 && coffeeCold.status < 400) {
        combine(data);
    } 
}
coffeeCold.send();


/************************ Search ************************/

search.addEventListener('click', function() {
    coffeeItems.innerHTML = "";
    let coffee = all_coffee_file.filter(function (object) {
        return object.title == input.value;
    })

    if(coffee.length != 0) {
        found = true;
        coffee[0].ingredients.forEach(ingredient => {
            var h3 = document.createElement('h3');
            h3.textContent = ingredient;
            coffeeItems.append(h3);
        });
    }

    if(coffeeItems.innerHTML === "") {
        coffeeItems.append(notFound);
        coffeeItems.append(examples);
    }
});

