function getInputValue(){
    let inputVal = document.getElementById('myInput').value;
    let guess = inputVal.toLowerCase();
    inputVal = ""

    let question = document.getElementById('question');
    let suggestion = document.getElementById('suggestion');
    let picture = document.getElementById('picture');
    let imgType = "height";
    
    // Shopping
    if(["shop", "shopping", "grocery", "chore"].includes(guess)){
        question.innerHTML = "What is Osito going to buy?";
        suggestion.innerHTML = "examples: 'apple', 'honey', 'jam', 'orange'";
        picture.src = '../img/osito/osito-jam.png';
        imgType= "width";
    }
    else if (guess === 'apple') {
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'pineapple', 'honey', 'jam', 'orange'";
        picture.src = '../img/osito/osito-apple.png';
        imgType = "height";
    }
    else if (guess === 'honey') {
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'apple', 'pumpkin', 'jam', 'orange'";
        picture.src = '../img/osito/osito-honey.png';
        imgType= "width";
    }
    else if(["jam", "jelly"].includes(guess)){
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'apple', 'pumpkin', 'soda', 'orange'";
        picture.src = '../img/osito/osito-jam.png';
        imgType= "width";
    }
    else if (guess === 'orange') {
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'apple', 'pumpkin', 'soda', 'pineapple'";
        picture.src = '../img/osito/osito-orange.png';
        imgType = "height";
    }
    else if (guess === 'pineapple') {
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'apple', 'pumpkin', 'soda', 'honey'";
        picture.src = '../img/osito/osito-pineapple.png';
        imgType = "height";
    }
    else if (guess === 'pumpkin') {
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'apple', 'orange', 'soda', 'honey'";
        picture.src = '../img/osito/osito-pumpkin.png';
        imgType = "height";
    }
    else if (guess === 'soda') {
        question.innerHTML = "What else did Osito buy?";
        suggestion.innerHTML = "examples: 'apple', 'pumpkin', 'jam', 'honey'";
        picture.src = '../img/osito/osito-soda.png';
        imgType = "width";
    }
    // Other XD
    else if(["bicycle", "ride", "riding bike", "bike"].includes(guess)){
        question.innerHTML = "Where is Osito going?";
        suggestion.innerHTML = "examples: 'garden', 'playground'";
        picture.src = '../img/osito/osito-bicycle.png';
        imgType = "height";
    } 
    else if(["fire", "police", "alarm", "emergency"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'shopping', 'mail', 'slide', 'illegal'";
        picture.src = '../img/osito/osito-emergency.png';
        imgType = "height";
    } 
    else if(["flower", "garden", "bush", "outside"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'sit', 'stare', 'tree'";
        picture.src = '../img/osito/osito-flower.png';
        imgType = "height";
    } 
    else if(["mail", "letter"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'sit', 'stare', 'illegal', 'police', 'fire'";
        picture.src = '../img/osito/osito-mail.png';
        imgType = "width";
    } 
    else if(["sit", "sitting", "chair"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'shopping', 'mail', 'slide', 'illegal'";
        picture.src = '../img/osito/osito-sit.png';
        imgType = "height";
    } 
    else if(["park", "playground", "play", "slide"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'tree', 'garden'";
        picture.src = '../img/osito/osito-slide.png';
        imgType = "height";
    } 
    else if(["stand", "standing"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'sit', 'bicycle', 'illegal', 'police', 'fire'";
        picture.src = '../img/osito/osito-stand.png';
        imgType = "height";
    } 
    else if(["stare", "looking"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'sit', 'bicycle', 'illegal', 'police', 'fire'";
        picture.src = '../img/osito/osito-stare.png';
        imgType = "height";
    } 
    else if(["tree", "climbing", "tree climbing", "branch"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'sit', 'bicycle', 'illegal', 'police', 'fire'";
        picture.src = '../img/osito/osito-tree-climb.png';
        imgType = "height";
    } 
    else {
        question.innerHTML = "Where is Osito doing next?";
        suggestion.innerHTML = "examples: 'shopping', 'mail', 'slide', 'illegal'";
        picture.src = '../img/osito/osito-trespassing.png';
        imgType = "height";
    } 
    

    // class change
    if (imgType == "height") {
        picture.classList.remove("width-adjust");
        picture.classList.add("height-adjust");
    }
    else if (imgType == "width") {
        picture.classList.remove("height-adjust");
        picture.classList.add("width-adjust");
    }
}