//===== TAB
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

let tabs1 = document.querySelectorAll(".tabs1 h3");
let tabContents1 = document.querySelectorAll(".tab-content1 div");

let tabItems = document.querySelectorAll(".tab-list-item");
let tabContentItems = document.querySelectorAll(".tab-content-item");

//EMAIL
const btn = document.getElementById('button');

//===== TAB
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

// EMAIL



document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_2alvtog';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('El mensaje se envió con exito!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });