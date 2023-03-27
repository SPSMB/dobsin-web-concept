const filterOpenBtn = document.querySelector('.filter__openBtn');
const filterContainer = document.querySelector('.filter__container');
const filterBx = document.querySelector('.filter__bx');

filterOpenBtn.addEventListener('click', () => {
    filterContainer.classList.toggle('filterActive');

    if(filterContainer.classList.contains('filterActive')){
        filterBx.style.animation = "fadeMoveIn 200ms ease-in-out forwards";
    }
    else{
        filterBx.style.animation = "fadeMoveOut 200ms ease-in-out forwards";
    }
})