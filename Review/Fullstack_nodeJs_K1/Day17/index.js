function drawTriangle(n) {
  var line = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      line += j + " ";
    }
    line += "\n";
  }
  console.log(line);
}
drawTriangle(10);
