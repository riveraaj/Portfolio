export function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            const id = section.getAttribute('id');
            navLinks.forEach((link) => {
                link.parentNode.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.parentNode.classList.add('active');
                }
            });
        }
    });
}

export function handleLinkClick(link) {
    document.querySelectorAll('nav ul li').forEach((li) => {
        li.classList.remove('active');
    });
    link.parentNode.classList.add('active');
}

export function handleScroll() {
    setActiveLink();
}

export function attachEventListeners() {
    document.querySelectorAll('nav ul li a').forEach((link) => {
        link.addEventListener('click', () => handleLinkClick(link));
    });

    window.addEventListener('scroll', handleScroll);
}

export function removeEventListeners() {
    window.removeEventListener('scroll', handleScroll);
}