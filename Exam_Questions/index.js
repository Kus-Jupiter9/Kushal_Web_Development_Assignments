async function fetchdata() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();

    const li = document.createElement("li");

    const loading = document.getElementById("loading");
    const post = document.getElementById("post-list");

    post.innerHTML = "";
    loading.style.display = "none";

    json.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element.title;
      li.textContent = element.body;
      post.appendChild(li);
    });
  } catch (error) {
    console.log("Failed to load data", error);
  }
}
fetchdata();
