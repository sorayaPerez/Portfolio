
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
