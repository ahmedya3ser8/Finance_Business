// Scroll To Top
let scrollToTop = document.querySelector(".scroll-to-top");
let btn = document.querySelector(".up");

document.addEventListener("scroll", function() {
    if (window.scrollY >= 400) {
      scrollToTop.style.opacity = "1";
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.opacity = "0";
      scrollToTop.style.display = "none";
    }
})

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// scroller progress
let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

//handel loader
function loader() {
  const loader = document.querySelector(".loader") ;
  window.addEventListener("load", () => {
  loader.classList.add("hidden");
  loader.addEventListener("transitionend", () => loader.remove());
  });
}
loader();

// add active class with scroll on header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
});

// add active class on Links
let sections = document.querySelectorAll(".landing, .services, .about-us, .contact-us");
let navlinks = document.querySelectorAll("header .navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let id = sec.getAttribute("id");
    if (window.scrollY >= sec.offsetTop - 150 && window.scrollY < sec.offsetTop - 150 + sec.offsetHeight) {
      navlinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`header .navbar-nav .nav-link[href*= "${id}"]`).classList.add("active");
      })
    }
  });
});

// increase numbers on scroll
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

// animation With Scroll
function reveal(animations, point) {
  function revealElement() {
    animations.forEach(animateElement => {
      const elementTop = animateElement.getBoundingClientRect().top;
      let height = window.innerHeight;
      if (elementTop < height - point) {
        animateElement.classList.add("active");
      } else {
        animateElement.classList.remove("active");
      }
      });
    }
    window.addEventListener("scroll", () => {
      revealElement();
    });
    revealElement();
}

reveal(document.querySelectorAll(".animate"),50);