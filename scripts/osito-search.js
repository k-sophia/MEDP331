function getInputValue(){
    let inputVal = document.getElementById('myInput').value;
    let guess = inputVal.toLowerCase();
    inputVal = ""

    let question = document.getElementById('question');
    let picture = document.getElementById('picture');
    let imgType = "height";
    
    // Shopping
    if(["shop", "shopping", "grocery", "chore"].includes(guess)){
        question.innerHTML = "What is Osito going to buy?";
        picture.src = '../img/osito/osito-jam.png';
        imgType= "width";
    }
    else if (guess === 'apple') {
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-apple.png';
        imgType = "height";
    }
    else if (guess === 'honey') {
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-honey.png';
        imgType= "width";
    }
    else if(["jam", "jelly"].includes(guess)){
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-jam.png';
        imgType= "width";
    }
    else if (guess === 'orange') {
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-orange.png';
        imgType = "height";
    }
    else if (guess === 'pineapple') {
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-pineapple.png';
        imgType = "height";
    }
    else if (guess === 'pumpkin') {
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-pumpkin.png';
        imgType = "height";
    }
    else if (guess === 'soda') {
        question.innerHTML = "What else did Osito buy?";
        picture.src = '../img/osito/osito-soda.png';
        imgType = "width";
    }
    // Other XD
    else if(["bicycle", "ride", "riding bike", "bike"].includes(guess)){
        question.innerHTML = "Where is Osito going?";
        picture.src = '../img/osito/osito-bicycle.png';
        imgType = "height";
    } 
    else if(["fire", "police", "alarm", "emergency"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-emergency.png';
        imgType = "height";
    } 
    else if(["flower", "garden", "bush", "outside"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-flower.png';
        imgType = "height";
    } 
    else if(["mail", "letter"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-mail.png';
        imgType = "width";
    } 
    else if(["sit", "sitting", "chair"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-sit.png';
        imgType = "height";
    } 
    else if(["park", "playground", "play", "slide"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-slide.png';
        imgType = "height";
    } 
    else if(["stand", "standing"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-stand.png';
        imgType = "height";
    } 
    else if(["stare", "looking"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-stare.png';
        imgType = "height";
    } 
    else if(["tree", "climbing", "tree climbing", "branch"].includes(guess)){
        question.innerHTML = "Where is Osito doing next?";
        picture.src = '../img/osito/osito-tree-climb.png';
        imgType = "height";
    } 
    else {
        question.innerHTML = "Where is Osito doing next?";
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