window.sr = ScrollReveal({ reset: true });

sr.reveal('.one, .feedback-quote, .fb-one, .fb-two, .fb-three', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    reset: false
})

sr.reveal('.three', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    delay: 800,
    reset: false
})

sr.reveal('.two', {
    origin: 'right',
    distance: '100px',
    reset: false
})

sr.reveal('.four', {
    origin: 'right',
    distance: '100px',
    duration: 2000,
    delay: 800,
    reset: false
})

sr.reveal('.cta-box, .footer-img, .footer-content', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    reset: false
})

sr.reveal('.footer-img, .footer-content', {
    origin: 'bottom',
    distance: '10px',
    duration: 2000,
    reset: false
})

sr.reveal('.header-container', {
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: false
})

sr.reveal('.intro-button, .intro-pic', {
    duration: 2000,
    reset: false
});

sr.reveal('.intro-img, .intro-title, .info-desc, .fb-one, .footer-img, .footer-content', {
    delay: 500,
    reset: false
});

sr.reveal('.intro-text, .fb-two', {
    delay: 1000,
    reset: false
});

sr.reveal('.fb-three', {
    delay: 1500,
    reset: false
});

const inputEmail = document.querySelector('[data-input-email]');
const btnSend = document.querySelector('[data-button-send]');
const errorMessage = document.querySelector('[data-error]');

btnSend.addEventListener('submit', function(event) {
    event.preventDefault();

    let emailPattern = /\S+@\S+\.\S+/;

    if (emailPattern.test(email)) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'flex';
        return
    }
});
let emailValue = /\S+@\S+\.\S+/;

function validateEmail(email) {
    if (emailValue.test(email) === false) {
        errorMessage.style.display = 'flex !important';
    } else if (emailValue.test(email) === true) {
        errorMessage.style.display = 'none';
    }
}

btnSend.addEventListener('click', function(e) {
    e.preventDefault();
    validateEmail(inputEmail.value);
}); */