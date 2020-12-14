var toggled = 0;

function toggleSprite() {
    if (toggled == 0) {
        openSprite();
        toggled = 1;
    } else {
        closeSprite();
        toggled = 0;
    }
}

function openSprite() {
    document.getElementById("sprites").style.maxHeight = "300px";
}

function closeSprite() {
    document.getElementById("sprites").style.maxHeight = "0";
}