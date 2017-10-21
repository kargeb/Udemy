console.log("dejaty");

var button = document.querySelector("button"),
    label = document.querySelector(".label");

button.onclick = function(){
    data = new Date();
    label.textContent = getDate(data) + " " +getTime(data);
}

function getDate(data) {
    return data.getDate() + "." + (data.getMonth() + 1) + "." + data.getFullYear();
}

function getTime() {
    return data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
}