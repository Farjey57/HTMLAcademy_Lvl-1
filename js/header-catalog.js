const button = document.querySelector(".header-catalog__button");
const dropdown = document.querySelector(".header-catalog__dropdown");

button.addEventListener ("click", function (evt) {
    button.classList.toggle('header-catalog__button--open');
    dropdown.classList.toggle('header-catalog__dropdown--active');
})