const link = document.querySelector('#link');

// if scroll is more than half the height of the window and link element exists, change inner html of link to 'Back to top'

window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight / 2 && link) {
        link.innerHTML = 'Login';
        link.setAttribute('href', '/#login');
    } else {
        link.innerHTML = 'Register';
        link.setAttribute('href', '/#signup');
    }
});
