/*************************  Day Quote *************************/

let day = new Date().getDay()
//console.log(day)
let quoteText = document.querySelector('#day-quote')

let arr = [
    "we don’t make mistakes, <br> just happy little accidents",
    "every artist was first an amateur",
    "you can’t wait for inspiration, <br> you have to go after it with a club",
    "the world of reality has its limits; <br> the world of imagination is boundless",
    "I don’t paint dreams or nightmares, <br> I paint my own reality",
    "laughter is timeless,<br> imagination has no age, <br> and dreams are forever",
    "my imagination makes me human and makes me a fool; <br> it gives me all the world and exiles me from it"
]

//day = 1
if (day == 1) {
    quoteText.innerHTML = arr[day - 1]
}

if (day == 2) {
    quoteText.innerHTML = arr[day - 1]
}

if (day == 3) {
    quoteText.innerHTML = arr[day - 1]
}

if (day == 4) {
    quoteText.innerHTML = arr[day - 1]
}

if (day == 5) {
    quoteText.innerHTML = arr[day - 1]
}

if (day == 6) {
    quoteText.innerHTML = arr[day - 1]
}

if (day == 7) {
    quoteText.innerHTML = arr[day - 1]
}

function changeQuote() {
    day = day + 1

    if(day >= 8) {
        day = 1
    }

    if (day == 1) {
        quoteText.innerHTML = arr[day - 1]
    }
    
    if (day == 2) {
        quoteText.innerHTML = arr[day - 1]
    }
    
    if (day == 3) {
        quoteText.innerHTML = arr[day - 1]
    }
    
    if (day == 4) {
        quoteText.innerHTML = arr[day - 1]
    }
    
    if (day == 5) {
        quoteText.innerHTML = arr[day - 1]
    }
    
    if (day == 6) {
        quoteText.innerHTML = arr[day - 1]
    }
    
    if (day == 7) {
        quoteText.innerHTML = arr[day - 1]
    }

}