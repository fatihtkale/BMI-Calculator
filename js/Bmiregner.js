function beregn() {
  var hojde = document.getElementById("hojde").value;
  var vagt = document.getElementById("vagt").value;
  var output = document.getElementById("output");
  var regning = vagt / (hojde * hojde) * 10000;
  var nummerMindre = regning.toFixed(2);

  output.innerHTML = "Din BMI er: " + nummerMindre;
}
