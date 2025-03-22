const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");

const menu= document.querySelector(".navlist");

openbtn.addEventListener("click", ()=>{
    menu.classList.add("show");
})

closebtn.addEventListener("click", ()=>{
    menu.classList.remove("show");
})



function showDetails() {
    document.getElementById('product-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('product-popup').style.display = 'none';
}

// let eye= document.getElementById("eye");
// eye.addEventListener("click",()=>{

// })
