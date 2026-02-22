const btn = document.getElementById("sign-up");
const msg = document.getElementById("mssg");

btn.addEventListener("click", function () {
  btn.disabled = true;
  msg.textContent = "Creating account...";

  function createAcc() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Account created successfully!");
      }, 2000);
      console.log("Promise: ", Promise);
    });
  }

  createAcc().then((result) => {
    msg.textContent = result;
    btn.disabled = false;
  });
});
