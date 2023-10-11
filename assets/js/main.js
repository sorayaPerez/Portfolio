// Selecciona el elemento del menú que quieres hacer sticky
const menu = document.querySelector('.menu');

// Obtiene la posición inicial del menú en la página
const menuTop = menu.offsetTop;

// Función para hacer que el menú sea sticky en scroll
function stickyMenu() {
    if (window.pageYOffset >= menuTop) {
        // Cuando se desplaza hacia abajo lo suficiente, agrega la clase "sticky"
        menu.classList.add('sticky');
    } else {
        // Si vuelve a la parte superior, elimina la clase "sticky"
        menu.classList.remove('sticky');
    }
}

// Agrega un evento de desplazamiento para llamar a la función stickyMenu en scroll
window.addEventListener('scroll', stickyMenu);

// Llama a la función stickyMenu una vez al cargar la página para inicializar el estado
stickyMenu();


//===== TAB
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});

let tabs1 = document.querySelectorAll(".tabs1 h3");
let tabContents1 = document.querySelectorAll(".tab-content1 div");
tabs1.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents1.forEach((content) => {
            content.classList.remove("active1");
        });
        tabs1.forEach((tab) => {
            tab.classList.remove("active1");
        });
        tabContents1[index].classList.add("active1");
        tabs1[index].classList.add("active1");
    });
});



// TAB EXPERIENCIA
let tabItems = document.querySelectorAll(".tab-list-item");
        let tabContentItems = document.querySelectorAll(".tab-content-item");
        tabItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                tabContentItems.forEach((content) => {
                    content.classList.remove("active3");
                });
                tabItems.forEach((tab) => {
                    tab.classList.remove("active3");
                });
                tabContentItems[index].classList.add("active3");
                tabItems[index].classList.add("active3");
            });
        });

// CONTACTO
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    emailjs.send('service_mkwzhud', 'template_ywqj8jo', {
        from_name: nombre,
        to_name: "Soraya Perez",
        from_email: email,
        message: mensaje,
        reply_to: "¡Te respondo en cuanto lo vea!"
    }, 'Gracias')
        .then((response) => {
            console.log('Correo electrónico enviado:', response.text);
        }, (error) => {
            console.error('Error al enviar el correo electrónico:', error);
        });


    mensajeForm.style.animation = 'aparecer 1s ease-out forwards';
    setTimeout(() => {
        mensajeForm.style.animation = 'desaparecer 1s ease-out forwards';
    }, 3000);
    form.reset();
});