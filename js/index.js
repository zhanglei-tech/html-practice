function mylsRunHorseLight() {

    // if (mylsTimer != undefined && mylsTimer != null) {
    //     clearInterval(mylsTimer);
    // }

    var oUl = document.getElementById("mylspaomadeng");

    if (oUl != null) {
        oUl.innerHTML += oUl.innerHTML;
        oUl.innerHTML += oUl.innerHTML;
        oUl.innerHTML += oUl.innerHTML;
        var lis = oUl.getElementsByTagName('li');
        var lisTotalWidth = 0;
        var resetWidth = 0;

        for (var i = 0; i < lis.length; i++) {
            lisTotalWidth += 242;
        }

        for (var i = 1; i <= lis.length / 4; i++) {
            resetWidth += 242;
        }

        oUl.style.width = lisTotalWidth + 'px';
        var left = 0;

        mylsTimer = setInterval(function () {
            left -= 1;
            if (left <= -resetWidth) {
                left = 0;
            }
            oUl.style.left = left + 'px';
        }, 20)

        $("#mylspaomadeng").hover(function () {
            clearInterval(mylsTimer);
        }, function () {
            clearInterval(mylsTimer);
            mylsTimer = setInterval(function () {
                left -= 1;
                if (left <= -resetWidth) {
                    left = 0;
                }
                oUl.style.left = left + 'px';
            }, 20);
        })
    }
}
