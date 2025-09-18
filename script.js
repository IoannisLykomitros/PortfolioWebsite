document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // On click, update active class
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // On scroll, update active class based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const top = section.offsetTop - 150; // Offset for better triggering
            const height = section.offsetHeight;
            const id = section.id;

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
