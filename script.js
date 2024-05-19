document.addEventListener('DOMContentLoaded', function() {
    const typedText = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "React Developer"],
        typeSpeed: 70,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });

    const menuToggle = document.getElementById('menuToggle');
    const menubar = document.getElementById('menubar');
    const container = document.querySelector('.main-container');

    menuToggle.addEventListener('click', function(event) {
        menubar.style.transform = 'translateX(0px)';
        menubar.style.opacity = '1';
        menubar.style.transition = '0.4s';
        container.style.transition = '0.4s';
        container.style.filter = 'blur(10px)'
        event.stopPropagation(); // Prevent click from propagating to document
    });

    document.addEventListener('click', function(event) {
        if (!menubar.contains(event.target) && !menuToggle.contains(event.target)) {
            menubar.style.transform = 'translateX(-100%)'; // or however you want to hide the menubar
            container.style.filter = 'blur(0px)'
        }
    });
});
