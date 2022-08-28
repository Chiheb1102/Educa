// Head Settings

let menu = document.querySelector("#menu-btn");
let links = document.querySelector(".nav .links");

menu.onclick = function() {
    links.classList.toggle("active");
}

let account = document.querySelector("#account-btn");
let form = document.querySelector(".form");

account.onclick = function() {
    form.classList.toggle("active");
}

let registerBtn = document.querySelector(".register-btn");
let loginBtn = document.querySelector(".login-btn");
let register = document.querySelector(".register-form");
let login = document.querySelector(".login-form");

registerBtn.onclick = () => {
    registerBtn.classList.toggle("active");
    loginBtn.classList.toggle("active");
    register.style.display = "block";
    login.style.display = "none";
}
loginBtn.onclick = () => {
    registerBtn.classList.toggle("active");
    loginBtn.classList.toggle("active");
    register.style.display = "none";
    login.style.display = "block";
}

// Home Slider

var swiper = new Swiper(".myHomeSwiper", {
  loop:true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});

// Top Courses & About Slider

var swiper = new Swiper(".mySwiper", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
});

// Contact Logos Slider

var swiper = new Swiper(".mySwiper-logos", {
    loop:true,
    grabCursor:true,
    spaceBetween: 60,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 5,
      },
    },
});

// FAQ Section

let faqs = document.querySelectorAll(".faq .box .qst");
let answers = document.querySelectorAll(".faq .box .qst span");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        if(faq.classList.contains("active")) {
            faqs.forEach((faq) => {
                faq.classList.remove("active");
                faq.nextElementSibling.style.display = "none";
            });
        } else {
            faqs.forEach((faq) => {
                faq.classList.remove("active");
                faq.nextElementSibling.style.display = "none";
            });
            faq.classList.add("active");
            faq.nextElementSibling.style.display = "block";
        }
    })
});