const hero = new Typed('.changing-hero', {
    strings: ['Find the books you need.', 'Share the ones you liked.', 'Discover books you\'d love.', 'Connect, Help and Inspire.'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});

// togglepassword functionality
const togglePassword = document.querySelector('#togglePassword');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const toggleLoginPassword = document.querySelector('#toggleLoginPassword');

const password = document.querySelector('#password1');
const confirmPassword = document.querySelector('#password2');
const loginPassword = document.querySelector('#loginPassword');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

toggleConfirmPassword.addEventListener('click', function (e) {
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

toggleLoginPassword.addEventListener('click', function (e) {
    const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    loginPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});