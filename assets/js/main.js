let countDownSection = document.querySelector(".count-down");
let nums = document.querySelectorAll(".count-down .num");
let started = false;

window.onscroll = function() {
  if (window.scrollY >= countDownSection.offsetTop - 300) {
    if (!started) {
      nums.forEach(num => countdown(num));
    }
    started = true;
  }
}

function countdown(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent = Math.ceil(+el.textContent + (goal / 200))
    if (+el.textContent >= goal) {
      clearInterval(counter);
    }
  },2000 / goal);
}