const modal = document.querySelector('.work-modal-cont');
const clickedDiv = document.querySelectorAll('.image');
const mainBody = document.querySelector('body');




window.addEventListener('DOMContentLoaded', () => {
    modal.innerHTML = `<div class="left-side" >
    <img src="https://picsum.photos/300/300?grayscale" alt="">
    <div class="relative">
    <i class="far fa-comment-alt"></i>
    <small>Header/Section Component</small>
    <h1>Code And Grow Together</h1>
    <h2>Day <span>04</span></h2>
</div>
</div>
<div class="right-side>
<small>fronenddevelopment <span>follow</span></small>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo, sunt debitis similique voluptatum dolorem. Culpa accusamus tenetur qui quis hic sed cupiditate distinctio laborum, adipisci voluptate porro! Perferendis, nostrum.</p>
</div>`;
});

clickedDiv.forEach((e) => {
    e.addEventListener('click', () => {
        console.log('hi')
        clickedDiv.classList.add('open');
        mainBody.classList.add('fixed');
    })
})
