function openCity(cityName) {
    let i;
    let x = document.getElementsByClassName("set_select");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

function set_open() {
    if(document.getElementById("set").style.display == "block"){
        document.getElementById("set").style.display = "none";
    }else
    {
    document.getElementById("set").style.display = "block";}
    }
function set_close() {
    document.getElementById("set").style.display = "none";
}
