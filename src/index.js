// const refs = {
//   openModalBtn: document.querySelector('.footer__link'),
//   closeModalBtn: document.querySelector('.students-button__close'),
//   modal: document.querySelector('.backdrop'),
// };

// refs.openModalBtn.addEventListener('click', openModal);
// refs.closeModalBtn.addEventListener('click', closeModal);

// function openModal() {
//   refs.modal.classList.remove('is-hidden');
// }
// function closeModal() {
//   refs.modal.classList.add('is-hidden');
// }
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     closeModal();
//   }
//   console.log(e);
// });

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelector('.slide');

let currentIndex = 0;

next.addEventListener('click', onNext);
function onNext() {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
    document.querySelector('.active').classList.remove('.active');
    slides[currentIndex].classList.add('.active');
    return;
  }
  if (currentIndex < slides.length) {
    document.querySelector('.active').classList.remove('.active');
    currentIndex += currentIndex;
    slides[currentIndex].classList.add('.active');
  }
}

prev.addEventListener('click', onPrev);
function onPrev() {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
    document.querySelector('.active').classList.remove('.active');
    slides[currentIndex].classList.add('.active');
    return;
  }

  if (currentIndex < slides.length) {
    document.querySelector('.active').classList.remove('.active');
    currentIndex -= currentIndex;
    slides[currentIndex].classList.add('.active');
  }
}
