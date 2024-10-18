const bullets = document.querySelectorAll(".Bullets span");
const Tech_texts = document.querySelectorAll(".text_single");
const Tech_imgs = document.querySelectorAll(".Tech_imgs img");

bullets.forEach((b, index) =>
  b.addEventListener("click", (e) => Change(e, index))
);

function Change(e, i) {
  bullets.forEach((b) => b.classList.remove("active"));
  Tech_texts.forEach((b) => b.classList.remove("active"));
  Tech_imgs.forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  console.log(i);
  Tech_texts[i].classList.add("active");
  Tech_imgs[i].classList.add("active");
}
