window.sr = ScrollReveal({ reset: true });

sr.reveal('.header-container, .intro-pic, .intro-title, .intro-text, .intro-button, .one, .two, .three, .four, .info-img, .info-title, .info-text, .info-link, .fb.quote, .fb-one, .fb-two, .fb-three', {
    origin: 'top',
    distance: '24px',
    duration: 2000,
    reset: false
})

sr.reveal('.cta-box, .footer-img, .location, .contact, .links, .social', {
    origin: 'bottom',
    distance: '24px',
    duration: 2000,
    reset: false
})

sr.reveal('.intro-pic, .two, .fb-two, .cta-box', {
    delay: 250
})

sr.reveal('.intro-title, .three, .fb-three, .footer-img', {
    delay: 500
})

sr.reveal('.intro-text, .four, .location, .intro-button, .contact, .links, .social', {
    delay: 750
})

const inputEmail = document.querySelector('[data-input-email]');
const form = document.querySelector('[data-form]');
const errorMessage = document.querySelector('[data-error]');

inputEmail.onclick = () => {
    errorMessage.style.display = 'none';
}

let emailValid = /\S+@\S+\.\S+/;

function warnMessage() {
    if (emailValid.test(inputEmail.value)) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'flex';
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    warnMessage();
});