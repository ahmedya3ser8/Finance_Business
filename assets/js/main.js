let countDownSection = document.querySelector(".count-down");
let nums = document.querySelectorAll(".count-down .num");
let started = false;

window.onscroll = function() {
  if (window.scrollY >= countDownSection.offsetTop - 400) {
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

// about-us Slider
let courses = document.querySelectorAll(".about-us .carousel-inner .carousel-item");
function slider(course, count) {
  course.forEach((ele) => {
    let next = ele.nextElementSibling;
    for (let i = 0; i < count; i++) {
      if (!next) {
        next = course[0];
      }
      let cloneChild = next.cloneNode(true);
      ele.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
}
slider(courses, 3);

// banner Slider
let bannerCourses = document.querySelectorAll(".banner .carousel-inner .carousel-item");
slider(bannerCourses, 4);