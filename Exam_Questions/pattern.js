function inverted_right_aligned(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
      row += "  ";
    }
    for (let k = i; k <= n; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
inverted_right_aligned(5);
