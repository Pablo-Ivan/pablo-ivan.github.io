var host = "pablo-ivan.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
/*document.getElementById('space1').onkeydown = function(event) {
    var event = event || window.event;
    var key = event.keyCode || event.which;
    if (key == 32 || key >= 48 && key <= 57) {
        if (event.preventDefault) event.preventDefault(); {
            event.returnValue = false;
        }
    }
};
document.getElementById('nameInput').onkeydown = function(event) {
    var event = event || window.event;
    var key = event.keyCode || event.which;
    if (key == 32 || key >= 48 && key <= 57) {
        if (event.preventDefault) event.preventDefault(); {
            event.returnValue = false;
        }
    }
};
*/
