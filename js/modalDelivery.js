const btn = document.querySelector('.delivery-order__button');
const contacts = document.querySelector('.main-navigation__contacts');
const modal = document.querySelector('.modal-delivery');
const modalWrap = modal.querySelector('.modal__wrap');
const closeBtn = modal.querySelector('.modal-delivery__close');


btn.addEventListener('click', (evt) => {
    modal.style.display = "block";
});

closeBtn.addEventListener('click', (evt) => {
    modal.style.display = "none";
});

modal.addEventListener('click', (evt) => {
    /*setTimeout(function(){
        modal.style.display = "none";
      },400);*/
    modal.style.display = "none";
});

modalWrap.addEventListener('click', (evt) => {
    evt.stopPropagation();
});

window.addEventListener("keydown", function (evt) {
    /*.keyCode - параметр объекта evt (объект события), в котором указывается код клавиши. 27 = Esc*/
    if (evt.keyCode === 27) {
        /*Делаем проверку, открыто ли окно*/
        if (modal.style.display == "block") {
            evt.preventDefault();
            modal.style.display = "none";
        }
    }
});

contacts.addEventListener("click", function (e) {
    e.preventDefault();
    const id = document.querySelector(".contacts");

    id.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});