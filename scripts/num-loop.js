// First Loop
var text = "";
for (let i = 1; i <= 100; i++) {

  text += "<span>" + i + "</span>";
    
}
document.getElementById("first-loop").innerHTML = text;

// Second Loop
text = "";
for (let i = 50; i <= 100; i++) {

  text += "<span>" + i + "</span>";
    
}
document.getElementById("second-loop").innerHTML = text;

// Even Loop
text = "";
for (let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        text += "<span>" + i + "</span>";
    }
}
document.getElementById("even-loop").innerHTML = text;

// Odd Loop
text = "";
for (let i = 25; i <= 100; i++) {
    if(i % 2 != 0) {
        text += "<span>" + i + "</span>";
    }
}
document.getElementById("odd-loop").innerHTML = text;