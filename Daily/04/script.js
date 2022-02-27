const togglebtn = document.querySelector(".toggle");
const sidebar = document.querySelector("nav");
const lis = document.querySelectorAll(".icons li a");

for (let i = 0; lis.length > i; i++) {
    lis[i].addEventListener("click", (e) => {
        e.preventDefault();
        SitByMySelf(lis[i]);
    })
}

function SitByMySelf(el) {
    for (let j = 0; lis.length > j; j++) {
        if (lis[j] == el) {
            el.classList.toggle("active");
        } else {
            lis[j].classList.remove("active");
        }
    }
}

togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    lis.forEach(ele => {
        ele.classList.toggle("ext");
    })
}, false);