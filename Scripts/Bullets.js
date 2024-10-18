const bullets = document.querySelectorAll(".bullets-crew span");
const crew = document.querySelectorAll(".crew-single");
bullets.forEach((b, index) => {
  b.addEventListener("click", (e) => ChangeImg(e, index));
});

function ChangeImg(e, index) {
  bullets.forEach((b) => b.classList.remove("active"));
  crew.forEach((c) => c.classList.remove("active"));
  e.target.classList.add("active");
  console.log(e);
  crew[index].classList.add("active");
}
