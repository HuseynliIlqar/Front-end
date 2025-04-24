
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.navbar a[href*='${id}']`).classList.add('active');
        }
    });
};
