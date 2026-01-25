// fetching elements using DOM
const rectangle_box = document.getElementById("rectangle_box");
const color_value = document.getElementById("color_value");
const resetbtn = document.getElementById("resetbtn");
const defaultColor = rectangle_box.style.backgroundColor;

// changing the color when user picks it
color_value.addEventListener("input", function () {
  console.log("Changing Background Color to", color_value.value);
  rectangle_box.style.backgroundColor = color_value.value;
});

// changing color to the default background color
resetbtn.addEventListener("click", function () {
  console.log("Resetting Background Color!");
  rectangle_box.style.backgroundColor = defaultColor;
});
