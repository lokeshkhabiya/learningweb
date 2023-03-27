'use strict';

// variables 

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

//functions

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};  

// logic

for (let i=0; i<btnsOpenModel.length; i++) 
    btnsOpenModel[i].addEventListener('click', openModal);
  
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    };
});