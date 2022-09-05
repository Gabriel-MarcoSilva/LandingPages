var motionLR = 0, motionTB = 0;

document.querySelector('body').addEventListener('keydown', function (event) {
    //37->40

    if (event.keyCode === 39) {
        motionLR += 10
        document.getElementsByClassName("key")[0].style.transform = "translate(" + motionLR + "px," + motionTB + "px)"
    }
    if (event.keyCode === 38) {
        motionTB -= 10
        document.getElementsByClassName("key")[0].style.transform = "translate(" + motionLR + "px," + motionTB + "px)"
    }
    if (event.keyCode === 40) {
        motionTB += 10
        document.getElementsByClassName("key")[0].style.transform = "translate(" + motionLR + "px," + motionTB + "px)"
    }
    if (event.keyCode === 37) {
        motionLR -= 10
        document.getElementsByClassName("key")[0].style.transform = "translate(" + motionLR + "px," + motionTB + "px)"
    }

});