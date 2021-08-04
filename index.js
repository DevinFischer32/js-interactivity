function crossOffMovie(event) {
  console.log(event.target);
  event.target.classList.toggle("checked");
}
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
  console.log(crossOff);
  movieTitle.addEventListener("click", crossOffMovie);
}

const form = document.querySelector("form");
form.addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
}
