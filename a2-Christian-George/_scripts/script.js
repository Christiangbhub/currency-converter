// Christian George-Igbinidu | 06/10/2024

function UStoCAD() {
  var input = document.getElementById("input1").value; // get input
  parseInt(input); // convert to int (optional)
  var result = input * 1.36; // convert input
  document.getElementById("result1").innerText =
    "$" + parseFloat(result).toFixed(2); // display input // round to nearest 2dp
}

function CADtoUS() {
  var input = document.getElementById("input2").value;
  parseInt(input);
  var result = input * 0.74;
  document.getElementById("result2").innerText =
    "$" + parseFloat(result).toFixed(2);
}

function UStoFRANC() {
  var input = document.getElementById("input3").value;
  parseInt(input);
  var result = input * 0.86;
  document.getElementById("result3").innerText =
    "Fr" + parseFloat(result).toFixed(2);
}

function FRANCtoUS() {
  var input = document.getElementById("input4").value;
  parseInt(input);
  var result = input * 1.17;
  document.getElementById("result4").innerText =
    "$" + parseFloat(result).toFixed(2);
}

function UStoINR() {
  var input = document.getElementById("input5").value;
  parseInt(input);
  var result = input * 84.03;
  document.getElementById("result5").innerText =
    "₹" + parseFloat(result).toFixed(2);
}

function INRtoUS() {
  var input = document.getElementById("input6").value;
  parseInt(input);
  var result = input * 0.012;
  document.getElementById("result6").innerText =
    "$" + parseFloat(result).toFixed(2);
}

function UStoEURO() {
  var input = document.getElementById("input7").value;
  parseInt(input);
  var result = input * 0.91;
  document.getElementById("result7").innerText =
    "€" + parseFloat(result).toFixed(2);
}

function EUROtoUS() {
  var input = document.getElementById("input8").value;
  parseInt(input);
  var result = input * 1.1;
  document.getElementById("result8").innerText =
    "$" + parseFloat(result).toFixed(2);
}

function clearValue() {
  for (var i = 1; i <= 8; i++) {
    document.getElementById("input" + i).value = "";
    document.getElementById("result" + i).innerHTML = "output";
  }
  document.getElementById("input1").focus();
}
