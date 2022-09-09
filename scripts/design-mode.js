let hour = new Date().getHours();
console.log(hour)

let body = document.querySelector('body');
let header = document.querySelector('header');
let title = document.querySelector('#title');
let footer = document.querySelector('footer');
let micro = document.getElementsByClassName('micro');
let microIMG = document.getElementsByClassName('micro-img');
let macro = document.getElementsByClassName('macro');
let macroIMG = document.getElementsByClassName('macro-img');
let p = document.getElementsByTagName('p')

// hour = 8
if(hour >= 18 || hour < 6) { //6PM - 6AM
    // Light Mode
    body.style.backgroundColor = '#fffff0';
    header.style.backgroundColor = '#CCDCFF'
    footer.style.backgroundColor = '#CCDCFF'
    title.style.color = '#431259'
    footer.style.color = '#431259'

    for( let i = 0; i < micro.length; i++ ){
        micro[i].style.setProperty('--micro-background-color', 'radial-gradient(#CCDCFF , #fffff0)')
    }
    for( let i = 0; i < macro.length; i++ ){
        macro[i].style.setProperty('--macro-background-color', 'radial-gradient(#FFF185 , #fffff0)')
    }

    for( let i = 0; i < microIMG.length; i++ ){
        microIMG[i].src = '../img/micro-assign.png';
    }

    for( let i = 0; i < macroIMG.length; i++ ){
        macroIMG[i].src = '../img/macro-assign.png';
    }

    for( let i = 0; i < p.length; i++ ){
        p[i].style.color = '#431259'
    }
}
else {
    // Dark Mode
    body.style.backgroundColor = '#10002B';
    header.style.backgroundColor = '#10002B'
    footer.style.backgroundColor = '#10002B'
    title.style.color = '#fffff0'
    footer.style.color = '#fffff0'

    for( let i = 0; i < micro.length; i++ ){
        micro[i].style.setProperty('--micro-background-color', 'radial-gradient(#FFF185 , #10002B)')
    }
    for( let i = 0; i < macro.length; i++ ){
        macro[i].style.setProperty('--macro-background-color', 'radial-gradient(#CCDCFF , #10002B)')
    }

    for( let i = 0; i < microIMG.length; i++ ){
        microIMG[i].src = '../img/micro-assign-dark.png';
    }

    for( let i = 0; i < macroIMG.length; i++ ){
        macroIMG[i].src = '../img/macro-assign-dark.png';
    }

    for( let i = 0; i < p.length; i++ ){
        p[i].style.color = '#E6F2FF'
    }
}

function lightMode() {
    hour = 20
    body.style.backgroundColor = '#fffff0';
    header.style.backgroundColor = '#CCDCFF'
    footer.style.backgroundColor = '#CCDCFF'
    title.style.color = '#431259'
    footer.style.color = '#431259'

    for( let i = 0; i < micro.length; i++ ){
        micro[i].style.setProperty('--micro-background-color', 'radial-gradient(#CCDCFF , #fffff0)')
    }
    for( let i = 0; i < macro.length; i++ ){
        macro[i].style.setProperty('--macro-background-color', 'radial-gradient(#FFF185 , #fffff0)')
    }

    for( let i = 0; i < microIMG.length; i++ ){
        microIMG[i].src = '../img/micro-assign.png';
    }

    for( let i = 0; i < macroIMG.length; i++ ){
        macroIMG[i].src = '../img/macro-assign.png';
    }

    for( let i = 0; i < p.length; i++ ){
        p[i].style.color = '#431259'
    }
}

function darkMode() {
    hour = 8
    body.style.backgroundColor = '#10002B';
    header.style.backgroundColor = '#10002B'
    footer.style.backgroundColor = '#10002B'
    title.style.color = '#fffff0'
    footer.style.color = '#fffff0'

    for( let i = 0; i < micro.length; i++ ){
        micro[i].style.setProperty('--micro-background-color', 'radial-gradient(#FFF185 , #10002B)')
    }
    for( let i = 0; i < macro.length; i++ ){
        macro[i].style.setProperty('--macro-background-color', 'radial-gradient(#CCDCFF , #10002B)')
    }

    for( let i = 0; i < microIMG.length; i++ ){
        microIMG[i].src = '../img/micro-assign-dark.png';
    }

    for( let i = 0; i < macroIMG.length; i++ ){
        macroIMG[i].src = '../img/macro-assign-dark.png';
    }

    for( let i = 0; i < p.length; i++ ){
        p[i].style.color = '#E6F2FF'
    }
}
