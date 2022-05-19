const imageCont = document.querySelector('.container');
const modal = document.querySelector('.work-modal-cont');
const clickedDiv = document.querySelectorAll('.image');
const mainBody = document.querySelector('body');
 
const imagesList = [
  {
    id: '1',
    img: 'images/Image1.png',
    cardName: 'Header/Section',
    day: 4,
  },
  {
    id: '2',
    img: 'images/image2.png',
    cardName: 'Testimonials Section',
    day: 3,
  },
  {
    id: '3',
    img: 'images/image3.png',
    cardName: 'Sign Up Form',
    day: 2,
  },
];
 
const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
 
const imagesUI = () => {
  clearElement(imageCont);
  imagesList.forEach((list) => {
    imageCont.innerHTML += `
        <div class="image" id="${list.id}">
        <img src=${list.img}  data-image="${list.id}" alt="" class="image-target">
        <div class="relative">
        <i class="far fa-comment-alt"></i>
        <small>${list.cardName}</small>
        <h1>Code And Grow Together</h1>
        <h2>Day <span>0${list.day}</span></h2>
    </div>
    </div>`;
  });
};
 
window.addEventListener('DOMContentLoaded', () => {
  imagesUI();
});
 
const popupUI = (index) => {
  clearElement(modal);
  const modalHtml = (lst) => {return `<div class="popupWindow" id="${index}">
  <div class="left-side" >
      <img src=${lst.img} alt="">
          <div class="relative-popup">
              <i class="far fa-comment-alt"></i>
              <small>Header/Section Component</small>
              <h1>Code And Grow Together</h1>
              <h2>Day <span>0${lst.day}</span></h2>
          </div>
  </div>
  <div class="right-side">
      <div>
          <small>fronenddevelopment <span>follow</span></small>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere unde, consequatur possimus commodi esse inventore laudantium perferendis minus 
          quibusdam et cum recusandae aut illum accusamus rem voluptates quas incidunt.</p>
      </div>
  </div>
  </div>`};
 
  imagesList.forEach((list) => {
    if(list.id === index) modal.innerHTML += modalHtml(list)
  });
};
 
imageCont.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('image-target') ||
    e.target.classList.contains('relative')
  ) {
    imageId = e.target.dataset.image;
    popupUI(imageId);
    modal.classList.add('open');
    imageCont.classList.add('hidden');
  }
});
 
window.onclick = (e) => {
  if (e.target.className === 'work-modal-cont open') {
    modal.classList.remove('open');
    imageCont.classList.remove('hidden');
  }
};
 