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
    });
  }

  createAcc().then((result) => {
    msg.textContent = result;
    btn.disabled = false;
  });

  createAcc().catch((error) => {
    console.log("Error", error);
  });
});
