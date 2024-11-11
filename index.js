
var openCTA = () => {
    var cta = document.getElementById("cta");
    var closeCTA = document.getElementById("closeCTA");
    var openCTA = document.getElementById("openCTA");
    closeCTA.style.display = "block";
    openCTA.style.display = "none";
    cta.style.right = 0;
}

var closeCTA = () => {
    var cta = document.getElementById("cta");
    var closeCTA = document.getElementById("closeCTA");
    var openCTA = document.getElementById("openCTA");
    closeCTA.style.display = "none";
    openCTA.style.display = "block";
    cta.style.right = "-140px";
}