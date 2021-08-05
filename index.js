let message = document.querySelector("#message");
console.log(message);
console.log("Hello World!");

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  inputField.value = "";
  document.querySelector("ul").appendChild(movie);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  movie.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteMovie);

  let crossOff = document.createElement("span");
  crossOff.textContent = "";
  movie.appendChild(crossOff);
  movieTitle.addEventListener("click", crossOffMovie);
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
  }
  revealMessage();
}
const form = document.querySelector("form");
form.addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted!`;
  revealMessage();
}

function revealMessage() {
  message.classList.remove("hide");
  setTimeout(() => message.classList.add("hide"), 1000);
}
