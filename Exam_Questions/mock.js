const logout = document.getElementById("log-out");
const message = document.getElementById("message");

logout.addEventListener("click", function () {
  logout.disabled = true;
  message.textContent = "Logging out...";

  function Account() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("You have been logged out.");
      }, 2000);
    });
  }

  Account().then((result) => {
    message.textContent = result;
    logout.disabled = false;
  });
});
