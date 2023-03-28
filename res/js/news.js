// Filter toggle
const filterOpenBtn = document.querySelector('.filter__openBtn');
const filterContainer = document.querySelector('.filter__container');
const filterBx = document.querySelector('.filter__bx');
const filterIcon = document.querySelector('.filter__icon');

filterOpenBtn.addEventListener('click', () => {
    filterContainer.classList.toggle('filterActive');

    if(filterContainer.classList.contains('filterActive')){
        filterBx.style.animation = "fadeMoveIn 200ms ease-in-out forwards";
    }
    else{
        filterBx.style.animation = "fadeMoveOut 200ms ease-in-out forwards";
    }
})


// Filter function
const filterBtns = document.querySelectorAll('.filter__btn');
const newsBxs = document.querySelectorAll('.news__bx');
const currentFilter = document.querySelector('.filter__selected');

// Redirect from different page to specific category
const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
const queryFilter = queryParams.get('filter');


if(queryFilter !== null){
    const filterCategories =  Array.from(filterBtns).map(e => e.getAttribute('data-filter-type'));

    if(filterCategories.includes(queryFilter)){
        sortNews(queryFilter);
    
        let catId = filterCategories.indexOf(queryFilter);
    
        currentFilter.innerText = filterBtns[catId].textContent;
    }
}


// Filter btns
filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let currentType = btn.getAttribute('data-filter-type');

        sortNews(currentType);

        filterBx.style.animation = "fadeMoveOut 200ms ease-in-out forwards";
        filterContainer.classList.toggle('filterActive');
        currentFilter.innerText = btn.textContent;
    })
})

// Sort news function
function sortNews(type){
    if(type === "all"){
        newsBxs.forEach((newsBx) => {
            newsBx.style.display = "flex";
        })
    }
    else{
        newsBxs.forEach((newsBx) => {
            let newsType = newsBx.getAttribute('data-news-type');
    
            if(newsType === type){
                newsBx.style.display = "flex";
            }
            else{
                newsBx.style.display = "none";
            }
        })
    }
}