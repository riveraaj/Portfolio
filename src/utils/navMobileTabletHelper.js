export function handleScroll() {
  const nav = document.getElementById('nav-mobile-tablet');
  const stopPoint = document.getElementById('stop-nav').offsetTop;

  if (window.innerWidth < 768) {
    if (window.pageYOffset >= stopPoint * 1.51 + 100) {
      nav.style.bottom = '12.5%';
    } else {
      nav.style.bottom = '3.5%';
    }
  } else {
    if (window.pageYOffset >= stopPoint * 1.7 + 100) {
      nav.style.bottom = '12.5%';
    } else {
      nav.style.bottom = '3.5%';
    }
  }
}

export function attachScrollEventListener() {
  window.addEventListener('scroll', handleScroll);
}

export function removeScrollEventListener() {
  window.removeEventListener('scroll', handleScroll);
}