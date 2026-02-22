function printRightAlignedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Add spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Add numbers
    for (let k = 1; k <= i; k++) {
      row += k;
    }

    console.log(row);
  }
}

// Example usage:
printRightAlignedTriangle(5);
