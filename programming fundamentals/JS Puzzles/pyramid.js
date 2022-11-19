function printPyramid(n, d) {
    let spaces = "";
    let row = "";
    for (i = 1; i <= n; i++) {
      console.log(i);
      row = "";
      spaces = "";
      for (j = 1; j <= n - i; j++) {
        console.log(j);
        spaces += " ";
        console.log({ spaces });
      }
      for (k = 1; k <= i; k++) {
        console.log(k);
        row = row + i + " ";
        console.log(row);
      }
      console.log(spaces + row);
    }
  }
  printPyramid(9, 0);