let addFriend = document.querySelector("#add");
let stranger = document.querySelector("h5");
let check = 0;

addFriend.addEventListener("click", function () {
  if (check === 0) {
    stranger.innerHTML = "Friends";
    stranger.style.color = "lightgreen";
    stranger.style.transition = "all 0.3s ease-out";
    addFriend.innerHTML = "Remove Friend";
    addFriend.style.backgroundColor = "rgb(218, 218, 218)";
    addFriend.style.color = "black";
    check = 1;
  } else {
    stranger.innerHTML = "Stranger";
    stranger.style.color = "red";
    stranger.style.transition = "all 0.3s ease-in";
    addFriend.innerHTML = "Add Friend";
    addFriend.style.backgroundColor = "lightseagreen";
    addFriend.style.color = "white";
    check = 0;
  }
});
