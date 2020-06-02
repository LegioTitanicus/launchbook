// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
let navbar = document.getElementsByTagName("nav");

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sidebar = document.getElementById("sidebar-left");

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
let pages = document.getElementsByClassName("pages");
let groups = document.getElementsByClassName("groups");

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
document.querySelector(".favorites h5").innerHTML = "Least Favs";

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let firstAd = document.getElementsByClassName("ad-slot")[0];
firstAd.style.display = "none";

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAd.style.display = "block";

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
firstAd
  .getElementsByTagName("img")[0]
  .setAttribute(
    "src",
    "https://qph.fs.quoracdn.net/main-qimg-97208631d1e6fdd7323f15925e1077cd"
  );
// Exercise 8): Find Sam's post and change its text to something incredible.
document
  .getElementById("list-of-posts")
  .getElementsByTagName("p")[4].innerHTML = "Figured it out!";

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
document
  .getElementById("list-of-posts")
  .getElementsByClassName("media-body")[1]
  .classList.add("post-liked");

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
document
  .getElementById("list-of-posts")
  .getElementsByClassName("media-body")[2]
  .classList.add("post-shared");

// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.
document
  .getElementById("list-of-posts")
  .getElementsByClassName("media-body")[2]
  .classList.remove("post-shared");
