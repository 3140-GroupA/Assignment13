function myKeyPress(e) {
  /* TODO1: retrieve the value from the text input */
  var inputNum = document.getElementById("textinput").value;
  var mytextbox = "my textbox element";
  var count = 0; // for 3
  var keyPressed;

  if (window.event) {
    // IE
    keyPressed = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var fixedNum = formatPhoneNumber(inputNum);

  // TODO2: set the value of the textbox with the formatted value
  document.getElementById("textinput").value = formatPhoneNumber(inputNum);
}

function formatPhoneNumber(value) {
  /* TODO4:  Use replace function to ignore extra - character */
  //This TODO is also completed using the onlyNumbers() function below
  value = value.replace(/\D/g, "");
  value = value.replace("-", "");
  value = value.replace("--", "");

  // TODO3: Add a condition to ignore entries beyond 10 digits
  //This TODO is also found in the html tag
  if (value.length > 10) value = value.slice(0, 10);
  if (value.length > 3 && value.length <= 6)
    value = value.slice(0, 3) + "-" + value.slice(3);
  else if (value.length > 6)
    value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);

  return value;
}
function onlyNumbers(value) {
  //ensures that the only values entered are numbers by using the numeric keycodes of the keyboard

  var keyCode = value.keyCode || value.which;

  const isNumeric =
    (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);

  return isNumeric;
}
