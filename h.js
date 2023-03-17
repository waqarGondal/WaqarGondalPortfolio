

const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".nav-manu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmanu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",() => {
    hamburger.classList.remove("active")
    navmanu.classList.remove("active")
}))

                //   .Section-1

  const sec1btn = document.querySelectorAll('.sec-1-btn')
  const btn = document.querySelectorAll('.btn')

  sec1btn.addEventListener("click", () => {
      sec1btn.color.classList.toggle('darken-mode');
      btn.body.classList.toggle('darken-mode');
  })