const CardsPro = document.querySelector(".CardProfile");
const Cards = document.querySelector(".CardPocket");
const OverDiv = document.querySelector(".overdiv");

console.log(OverDiv);

function dragElement(elmnt) {
    let pos1, pos3, Res = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        Res += pos1;
        Cards.style.transform = `rotate(${-(Res / 10)}deg)`;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(CardsPro);

// const DragFunc = (ele) => {
//     let poster, pos3, pos4;
//     ele.onmousedown = dragMouseDown;

//     function dragMouseDown(e) {
//         e.preventDefault();
//         poster = e.clientX
//         document.onmousemove = elementDrag;
//         document.onmouseup = closeDragElement;
//     }

//     function elementDrag(e) {
//         e.preventDefault();
//         // if()
//         pos3 = e.clientX;
//         pos4 = pos3;
//         console.log(CardsPro.clientWidth / 2, e.clientX);
//         // console.log(CardsPro.clientWidth / 2);
//         Cards.style.transform = `rotate(${pos4 / 10}deg)`;
//     }

//     function closeDragElement() {
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

// DragFunc(CardsPro);