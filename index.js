const imageCont = document.querySelector('.container');
const modal = document.querySelector('.work-modal-cont');
const clickedDiv = document.querySelectorAll('.image');
const mainBody = document.querySelector('body');


const imagesList = [
    {
        id: 1,
        img: "images/Image1.png",
        day: 4,
    },
    {
        id: 2,
        img: "images/image2.png",
        day: 3,
    },
    {
        id: 3,
        img: "images/image3.png",
        day: 2,
    }
]

const imagesUI = () => {
    imagesList.forEach((list) => {
        imageCont.innerHTML +=`
        <div class="image" id="${list.id}">
        <img src=${list.img} alt="" class="image-target">
        <div class="relative">
        <i class="far fa-comment-alt"></i>
        <small>Header/Section Component</small>
        <h1>Code And Grow Together</h1>
        <h2>Day <span>0${list.day}</span></h2>
    </div>
    </div>`;
    })
    
}

window.addEventListener('DOMContentLoaded', () => {
    imagesUI()
});


const popupUI = () => {
    imagesList.forEach((list) => {
    modal.innerHTML += `<div class="popupWindow" id="${list.id}">
    <div class="left-side" >
        <img src=${list.img} alt="">
            <div class="relative">
                <i class="far fa-comment-alt"></i>
                <small>Header/Section Component</small>
                <h1>Code And Grow Together</h1>
                <h2>Day <span>0${list.day}</span></h2>
            </div>
    </div>
    <div class="right-side">
        <div>
            <small>fronenddevelopment <span>follow</span></small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere unde, consequatur possimus commodi esse inventore laudantium perferendis minus 
            quibusdam et cum recusandae aut illum accusamus rem voluptates quas incidunt.</p>
        </div>
    </div>
    </div>`;
})
};




imageCont.addEventListener('click', (e) => {
    if (e.target.classList.contains('image-target') || e.target.classList.contains('relative') ) {
        popupUI();
        modal.classList.add('open');
        mainBody.classList.add('fixed');
    }
  });

window.onclick = (e) => {
    if(e.target.className === "work-modal-cont open") {
        e.target.style.display = "none";
    }
}
