
let cont = 0;

export function estourar(props) {
  cont++
  if (cont === 100) {
    cont = 0
  }
  if (props !== null) {
    document.getElementsByClassName("flutter")[props].style.display = "none";
    document.getElementsByClassName("invi")[0].innerHTML = "" + cont + "";
    setInterval(function () {
      document.getElementsByClassName("flutter")[props].style.display = "block"
      if (props === 0) {
        document.getElementsByClassName("flutter")[props].style.animation = "anima ease-out 10s"
      }
      if (props === 1) {
        document.getElementsByClassName("flutter")[props].style.animation = "anima2 ease-out 10s"

      }
    }, 1000);
  }
}

export function mudaCor(props) {
  if (props === 0) {
    document.getElementsByClassName("image")[0].style.background = "blue";
  } else if (props === 1) {
    document.getElementsByClassName("image")[0].style.background = "green";
  } else if (props === 2) {
    document.getElementsByClassName("image")[0].style.background = "pink";
  } else {
    document.getElementsByClassName("image")[0].style.background = "white";
  }
}