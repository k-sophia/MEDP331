// find the desired selectors
var search = document.getElementById('search');
let minCalories = document.getElementById('minCalories');
let maxCalories = document.getElementById('maxCalories');
var dessertCards = document.getElementById('dessert-cards');

var notFound = document.createElement('h3');
notFound.className = "error-message";
var fixInput = document.createElement('h3');
fixInput.className = "error-message";

notFound.textContent = "No Dessert Found";
fixInput.textContent = "Enter Min Calories and Max Calories for Results";

/************************ Hot Coffee ************************/

var dessertRecipe = new XMLHttpRequest();
dessertRecipe.onreadystatechange = function() {
    // check if the response data send back to us 
    if(dessertRecipe.readyState === 4) {
        // coffeeCard.style.border = '1px solid #e8e8e8';
        // uncomment the line below to see the request
        // console.log(request);
        // check if the request is successful
        if(dessertRecipe.status === 200) {
        // update the HTML of the element
            // dessertItems.innerHTML = request.responseText;        
        } else {
        // otherwise display an error message
            dessertItems.innerHTML = 'An error occurred during your request: ' +  dessertRecipe.status + ' ' + dessertRecipe.statusText;
        }
    }
}

/************************ Search ************************/

search.addEventListener('click', function() {
    dessertCards.innerHTML = "";
    if(minCalories.value === "" || maxCalories.value === "") {
        dessertCards.append(fixInput);
    }
    else {
        apiCall();
    }
});

function apiCall() {
    dessertCards.innerHTML = "";
    var link = "https://api.spoonacular.com/recipes/complexSearch?"
        + "type=dessert"
        + "&addRecipeInformation=true"
        + "&minCalories=" + minCalories.value
        + "&maxCalories=" + maxCalories.value
        + "&apiKey=32d49ab8e9914926bd94390eb697e915";
    dessertRecipe.open('GET', link, true);
    dessertRecipe.onload = function () {
        var data = JSON.parse(this.response);
        if (dessertRecipe.status >= 200 && dessertRecipe.status < 400) {
            dessertRecipeDisplay(data.results);
        } 
    }
    dessertRecipe.send();
}

function dessertRecipeDisplay(data) {
    let offset = Math.floor(Math.random() * data.length);

    var selectedDesserts = data.slice(offset, offset + 3);
    selectedDesserts.forEach(dessert => {
        console.log(dessert)
        var card = document.createElement('div');
        card.className = "dessert-card";

        var img = document.createElement('img');
        img.className = "dessert-img";
        img.alt = "Dessert Image";
        img.src = dessert.image;
        card.append(img);

        var titleDiv = document.createElement('div');
        titleDiv.className = "dessert-title-div";
        var title = document.createElement('a');
        title.className = "dessert-title";

        title.textContent = dessert.title;
        title.href = dessert.sourceUrl;
        titleDiv.appendChild(title)
        card.append(titleDiv);

        var cardInfo = document.createElement('div');
        cardInfo.className = "dessert-info";
        var calorie = document.createElement('h5');
        calorie.className = "dessert-calorie";
        var serving = document.createElement('h5');
        serving.className = "dessert-serving";
        var time = document.createElement('h5');
        time.className = "dessert-time";

        calorie.textContent = dessert.nutrition.nutrients[0].amount + " Calories";
        time.textContent = dessert.readyInMinutes + " Minutes";
        serving.textContent = dessert.servings + " Servings";

        cardInfo.append(calorie);
        cardInfo.append(serving);
        cardInfo.append(time);
        card.append(cardInfo);

        var intructions = document.createElement('div');
        intructions.className = "dessert-intructions";
        var ingredients = document.createElement('div');
        ingredients.className = "dessert-ingredients";

        // let ingredients = [];
        let instructionsArray = dessert.analyzedInstructions[0].steps
        instructionsArray.forEach(step => {
            var temp = document.createElement('h4');
            temp.className = "dessert-step";
            temp.textContent = step.step;

            step.ingredients.forEach(item => {
                var temp2 = document.createElement('h5');
                temp2.className = "dessert-item";
                temp2.textContent = item.name;
                ingredients.append(temp2);
            });

            intructions.append(temp);
        });

        card.append(ingredients);
        card.append(intructions);

        dessertCards.append(card);
    });

    if(dessertCards.innerHTML === "") {
        dessertCards.append(notFound);
    }
}

