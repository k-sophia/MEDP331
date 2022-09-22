function getInputValue(){
    let inputVal = document.getElementById('myInput').value.toLowerCase();
    let flower = inputVal;

    let textDisplay = document.getElementById('output');
    let picture = document.getElementById('picture');
    
    if (flower === 'rose') {
        textDisplay.innerHTML = "What’s in a name? That which we call a <span>rose</span> by any other name would smell as sweet.";  
        picture.src = '../img/flower-rose.jpg';
    }
    else if(flower === 'tulip'){
        textDisplay.innerHTML="How can you be content to be in the world like <span>tulips</span> in a garden, to make a fine show, and be good for nothing?";
        picture.src = '../img/flower-tulip.jpg';
    } 
    else if(flower === 'lily'){
        textDisplay.innerHTML = "I would far rather have two or three <span>lilies</span> of the valley gathered for me by a person I like, than the most expensive bouquet that can be bought.";
        picture.src = '../img/flower-lily.jpg';
    }   
    else if(flower === 'lotus'){
        textDisplay.innerHTML = "As the <span>lotus</span> rises on its stalk unsoiled by the mud and water, so the wise one speaks of peace and is unstained by the opinions of the world.";
        picture.src = '../img/flower-lotus.jpg';
    } 
    else if(flower === 'orchid'){
        textDisplay.innerHTML = "An <span>orchid</span> in a deep forest sends out its fragrance even if no one is around to appreciate it.";
        picture.src = '../img/flower-orchid.jpg';
    } 
    else if(flower === 'magnolia'){
        textDisplay.innerHTML = "Have you ever looked at the bud of a <span>magnolia</span> flower? </br> It’s a tight little pod that stays closed up for a long time on the end of its branch until one day, out of nowhere, it finally bursts open into this gigantic, gorgeous, fragrant flower that’s ten times bigger than the bud itself. It’s impossible to imagine that such a big beautiful thing could pop out of that tiny little bud. </br> But it does.";
        picture.src = '../img/flower-magnolia.jpg';
    } 
    else if(flower === 'carnation'){
        textDisplay.innerHTML = "In the beginning we start with roses. The king's flower right? Only they wilt in less than a day, especially when exposed to the elements. But <span>Carnations</span>? Oh, what a beautiful flower. They come in every color. True, some are painted, but that doesn't mean they are less beautiful, and they never wilt.";
        picture.src = '../img/flower-carnation.jpg';
    } 
    else {
        textDisplay.innerHTML = "Sorry, No Flower Image Available";
        picture.src = "../img/flower-bouquet.jpg"
    }
}