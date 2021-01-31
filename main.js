function generating() {
  const pinButton = document.getElementById("generatePin");
  let randomNum = parseInt(Math.random() * 100000);

  if (randomNum >= 10000) {
    pinButton.value = randomNum;
  } else {
    generating();
  }
}

// clicking numbers
function inputNumber(num) {
  const newInput = document.getElementById("inputPin").value + num;
  document.getElementById("inputPin").value = newInput;

  if (num == "clear") {
    document.getElementById("inputPin").value = "";
  }

  if (num == "") {
    let popping = document.getElementById("inputPin").value;
    let newPin = popping.slice(0, -1);
    document.getElementById("inputPin").value = newPin;
  }
}

// comparing
function comparing() {
  const inputValue = document.getElementById("inputPin").value;
  const generateValue = document.getElementById("generatePin").value;
  if (inputValue == generateValue) {
    document.getElementById("notiP").style.display = "block";
    document.getElementById("mainThing").style.display = "none";
  } else {
    document.getElementById("notiN").style.display = "block";
    document.getElementById("mainThing").style.display = "none";
    document.getElementById("negative").innerText =
      document.getElementById("negative").innerText + " " + generateValue;
    document.getElementById("buttn").style.display = "none";
  }
}