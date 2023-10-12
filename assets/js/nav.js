// document.addEventListener('DOMContentLoaded', function () {
//     let sections = document.querySelectorAll('.menujs');
//     let navLinks = document.querySelectorAll('header nav a');
//     let menu = document.querySelector('.menu');

//     // Calcula la altura del menú fijo
//     let menuHeight = menu.offsetHeight;

//     function highlightNav() {
//         let scrollY = window.scrollY;

//         sections.forEach((section) => {
//             let sectionTop = section.getBoundingClientRect().top + window.scrollY;
//             let sectionHeight = section.offsetHeight;
//             let id = section.getAttribute('id');

//             // Ajusta la posición de la sección teniendo en cuenta la altura del menú
//             sectionTop -= menuHeight;

//             if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//                 navLinks.forEach((link) => {
//                     link.classList.remove('activenav');
//                 });

//                 document.querySelector('header nav a[href="#' + id + '"]').classList.add('activenav');
//             }
//         });
//     }

//     highlightNav();
//     window.addEventListener('scroll', highlightNav);
// });