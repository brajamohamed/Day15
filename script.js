function displayText10(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "10";
    callback(displayText8);
  }, 1000);
}
function displayText9(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "9";
    callback(displayText7);
  }, 1000);
}
function displayText8(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "8";
    callback(displayText6);
  }, 1000);
}
function displayText7(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "7";
    callback(displayText5);
  }, 1000);
}
function displayText6(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "6";
    callback(displayText4);
  }, 1000);
}
function displayText5(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "5";
    callback(displayText3);
  }, 1000);
}
function displayText4(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "4";
    callback(displayText2);
  }, 1000);
}
function displayText3(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "3";
    callback(displayText1);
  }, 1000);
}
function displayText2(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "2";
    callback(displayText0);
  }, 1000);
}
function displayText1(callback) {
  setTimeout(() => {
    document.getElementById("display").innerText = "1";
    callback();
  }, 1000);
}

function displayText0() {
  setTimeout(() => {
    document.getElementById("display").innerText = "Happy Independence Day";
  }, 1000);
}
