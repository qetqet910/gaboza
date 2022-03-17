const CardsPro = document.querySelector(".CardProfile");
const Cards = document.querySelector(".CardPocket");
const Lis = document.querySelectorAll(".CardPocket li");
const LeftWindow = document.querySelector(".LeftWindow")
const closeBtn = document.querySelector(".close");
const fff = document.querySelector('.fff');

let Counts = 0;
let IFCount = 0;

Lis.forEach(element => {
    element.addEventListener('click', (e) => {
        if (Counts == 0 && IFCount == 0) {
            CardOn(e)
            const IFrame = document.createElement('iframe');
            IFrame.src = window.getComputedStyle(e.currentTarget).content.replace("\"", "").replace("\"", "");
            LeftWindow.append(IFrame)
            IFCount = 1;
        }
    }, false)
});

closeBtn.addEventListener('click', (e) => {
    LeftWindow.style.left = "-100%";
    LeftWindow.style.backgroundColor = "rgba(255, 255, 255, 0)";
    closeBtn.style.opacity = '0';
    const IFrame = document.querySelector(".LeftWindow iframe");
    IFrame.style.opacity = 0;
    setTimeout(() => {
        IFrame.remove();
    }, 500);
    IFCount = 0;
})

function CardOn(e) {
    let CardsColor = window.getComputedStyle(e.target).backgroundColor
    LeftWindow.style.backgroundColor = `${CardsColor}`
    LeftWindow.style.left = "0%";
    closeBtn.style.opacity = '1';
    fff.style.zIndex = "999";
}

function dragElement(elmnt) {
    let pos1, pos3, Res = 0;
    elmnt.onmousedown = dragMouseDown;
    Counts = 1;
    function dragMouseDown(e) {
        e.preventDefault();
        if (e.target.localName == "li") {
            CardOn(e)
        }
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        Res += pos1;
        Cards.style.transform = `rotate(${-100 - (Res / 10)}deg)`;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        Counts = 0;
    }
}

dragElement(CardsPro);