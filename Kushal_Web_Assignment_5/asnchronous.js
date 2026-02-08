// Task1: Understanding the Callbacks

// creating a getUser function with parameters as id and callback
function getUser1(id, callback) {
  setTimeout(() => {
    // executing after delay of 2s
    const user = { id: id, name: "Root" }; // user object
    callback(user); // passing the result to callback
  }, 2000);
}
// Calling getUser function and printing the user name.
getUser1(1, function (res) {
  console.log("User Name: ", res.name);
});

// Task2: Callback Hell simulation
// getUser function
function getUser2(userID, callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Root" };
    callback(user);
  }, 2000);
}
// getPost function
function getPost2(userID, callback) {
  setTimeout(() => {
    const post = ["post1", "post2"];
    callback(post);
  }, 2000);
}
// getComment function
function getCmnt2(postID, callback) {
  setTimeout(() => {
    const comment = ["nice", "good"];
    callback(comment);
  }, 2000);
}
// Call the function
getUser2(1, function (user) {
  console.log("User Fetched");
  getPost2(user.id, function (post) {
    console.log("Posts Fetched");
    getCmnt2(post[0], function (comment) {
      console.log("Comment Fetched");

      console.log("User: ", user);
      console.log("Posts: ", post);
      console.log("Comments: ", comment);
    });
  });
});

// Task3: Conversion to Promise
// getUser function thar returns a new promise
function getUser3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching Data...");
      const user = { id: 1, name: "Root" };
      resolve(user); // resolving the promise
    }, 2000);
  });
}
// getPosts function that returns another promise
function getPosts3(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching Posts of ${userID}`);
      const posts = ["post1", "post2"];
      resolve(posts); // resolving the promise
    }, 2000);
  });
}
// getCmnt function that returns another promise
function getCmnt3(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching Comments of ${post}`);
      const comment = ["nice", "good"];
      resolve(comment); // resolving the promise
    }, 2000);
  });
}

// Promise-Chaining
const userData = getUser3()
  .then((user) => {
    console.log("User Fetched");
    // promse doesn't retain its previous values
    // Each .then() only gets what the other .then() returns
    return getPosts3(user.id).then((posts) => ({ user, posts }));
  })
  .then((data) => {
    console.log("Posts Fetched");
    // fetching only of one post
    return getCmnt3(data.posts[0]).then((comments) => ({
      user: data.user,
      posts: data.posts,
      comments: comments,
    }));
  })
  // printing all the fetched data
  .then((res) => {
    console.log("User: ", res.user);
    console.log("Posts: ", res.posts);
    console.log("Comments: ", res.comments);
  })
  // catching the error
  .catch((err) => {
    console.log(err, "error getting data");
  });

// Task4: Async/Await version
// getUser function thar returns a new promise
function getUser4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching Data...");
      const user = { id: 1, name: "Root" };
      resolve(user); // resolving the promise
    }, 2000);
  });
}
// getPosts function that returns another promise
function getPosts4(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching Posts of ${userID}`);
      const posts = ["post1", "post2"];
      resolve(posts); // resolving the promise
    }, 2000);
  });
}
// getCmnt function that returns another promise
function getCmnt4(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching Comments of ${post}`);
      const comment = ["nice", "good"];
      resolve(comment); // resolving the promise
    }, 2000);
  });
}

async function showData() {
  try {
    // wait for getUser to resolve
    const user = await getUser4();
    console.log("User Fetched");

    // wait for the getPosts promise to resolve using the user ID
    // returns an array of posts for that user
    const posts = await getPosts4(user.id);
    console.log("Posts Fetched");

    // wait for the getCmnt promise to resolve using the first post
    // returns an array of comments for that post
    const comments = await getCmnt4(posts[0]);
    console.log("Comments Fetched");

    // displaying the final results
    console.log("User: ", user);
    console.log("Posts: ", posts);
    console.log("Comments: ", comments);
  } catch (error) {
    // catching the error
    console.log(error, "Error fetching the data");
  }
}
// calling the function
showData();
