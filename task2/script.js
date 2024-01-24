// ==================== Responsive Navigation bar ========================================

const navbarActionIcon = document.querySelector('.actionIcon');
const menubtn = document.querySelector('.menuIcon');
const cancelbtn = document.querySelector('.cancelIcon');
const mobileNavigationBar = ()=>{
    menubtn.classList.toggle('hideActivityBtn');
    cancelbtn.classList.toggle('hideActivityBtn');
    document.querySelector('.navigationBar').classList.toggle('hiddenNavBar--forMobile');
}
navbarActionIcon.addEventListener('click',function(){
  mobileNavigationBar();
});
//================================    Smooth Scrolling ========================== //
const navbar = document.querySelector('.navigationBar--wrapper');
const navitems = document.querySelectorAll('.nav-items');
navbar.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav-item')){
        const address = e.target.getAttribute('href');
        document.querySelector(`${address}`).scrollIntoView({behavior:'smooth'});
        mobileNavigationBar();
    }


    // active status change
    // navitems.forEach(item=>item.classList.remove('active'));
    // document.querySelector(`.nav-item--${val}`).classList.add('active');
})


// ====================== Tabbed Component Switch and tab Button active status change   ====================================== //

const tabbedComponents = document.querySelectorAll('.tabbedContent');
const tabBtnContainer = document.querySelector('.tabbedButtonsContainer');
const tabBtns = document.querySelectorAll('.tabButton');

tabBtnContainer.addEventListener('click',function(e){
    const clicked = e.target.closest('.tabButton');
    if(!clicked) return;
    const value = clicked.dataset.buttonPressed;
    // active button feature
    tabBtns.forEach(btn=> btn.classList.remove('activeTabButton'));
    document.querySelector(`.tabBtn--${value}`).classList.add('activeTabButton');
    //changing tabs
    tabbedComponents.forEach(tab=> tab.classList.remove('activetab'));
    document.querySelector(`.tabbed-content--${value}`).classList.add('activetab');
})

// ====================   Contact Section    ============================  //
const commoninputs = document.querySelectorAll('.contact-inputs');
const submitBtn = document.querySelector('.submitbtn');

// checks whether all necessary fields are filled or not before submitting. if not it does allow user to submit
submitBtn.addEventListener('click',function(e){
  let check = true;
  commoninputs.forEach(input=> {
    if(input.value==false) {
      check = false;
      console.log('false value encountered');
      return;
    }
  })
  if(check){
    commoninputs.forEach(input=>input.value='');
    e.preventDefault();
  }
})









// ======================   SWIPPER JS LIBRARY ========================
const progressBar = document.querySelectorAll('.progress');
progressBar.forEach(bar=>{
    const value = bar.dataset.progress;
    bar.style.width = `${value}%`;
})
// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});