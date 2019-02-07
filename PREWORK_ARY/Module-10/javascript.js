
document.getElementById("button1").addEventListener("click", function () {
    var elem = document.getElementById("box");
    var height = window.getComputedStyle(elem,null).getPropertyValue("height");
    var color = window.getComputedStyle(elem,null).getPropertyPriority("color")
    height = height.replace("px","");
    height= +height;
    var n = height;
    height = n+50+'px';
    document.getElementById("box").style.height = height;
    document.getElementById("box").style.color = color;
});

document.getElementById("button2").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.opacity = "1";

});

document.getElementById("button3").addEventListener("click", function () {

    document.getElementById("box").style.opacity = "0.1";

});

document.getElementById("button4").addEventListener("click", function () {

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

});
