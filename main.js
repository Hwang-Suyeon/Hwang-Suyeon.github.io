const moreBtn = document.querySelector('.info .metaData .moreBtn');
const title = document.querySelector('.info .metaData .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})