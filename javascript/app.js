const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
const li = document.querySelectorAll('.links li');

burger.addEventListener('click', function() {
    links.classList.toggle('active');

    li.forEach(li => {
        li.addEventListener('click', function() {
            links.classList.remove('active');
        });
    });
});