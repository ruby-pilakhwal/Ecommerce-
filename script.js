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


let previewContainer = document.querySelector(".product-preview");
let eyeIcons = document.querySelector(".fa-eye");
let crossIcons = document.querySelector(".cross");
let previewBox = document.querySelector(".productCard");

eyeIcons.addEventListener("click", ()=>{
    previewContainer.style.display = "flex";
    previewBox.classList.add("active");
});



// document.querySelectorAll(".product").forEach(product =>{
//     product.onclick = () => {
//         previewContainer.style.display = "flex";
//         let name = product.getAttribute("data-name");    
//         previewBox.forEach(previewBox=>{
//             let target = previewBox.getAttribute("data-target");
//             if(name == target){
//                 previewBox.classList.add("active");
//             }
       
//         });
//     };
// });

crossIcons.addEventListener("click" , () =>{
    previewContainer.style.display = "none";
    previewBox.classList.remove("active");
});


const sizeOptions = document.querySelectorAll('input[name="size"]');
        const addToCartButton = document.getElementById('addToCart');
        const productPrice = document.getElementById('productPrice');
        const labels = document.querySelectorAll('.size-select label');

        sizeOptions.forEach((option, index) => {
            option.addEventListener('change', () => {
                if (option.checked) {
                    productPrice.style.display = 'block'; 
                    addToCartButton.disabled = false; 
                    addToCartButton.classList.add('enabled');


                    labels.forEach(label => label.classList.remove('selected'));
                    labels[index].classList.add('selected');
                }
            });
        });

        (function () {
  const quantityContainer = document.querySelector(".quantity");
  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".plus");
  const inputBox = quantityContainer.querySelector(".input-box");

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= parseInt(inputBox.max);
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("minus")) {
      decreaseValue();
    } else if (event.target.classList.contains("plus")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;

    
    console.log("Quantity changed:", value);
  }
})();




   const heartCount = document.getElementById('heart-count');
   let liked=document.getElementById('liked');
   const sideMenu = document.getElementById('side-menu');
   const closeBtn = document.getElementById('close-btn');
   const likedProductsContainer = document.getElementById('liked-products');

 
   const heartIcons = document.querySelectorAll('#heart');


   let likedProducts = [];

 
   heartIcons.forEach(function(heartIcon) {
       heartIcon.addEventListener('click', function() {
           
           let product = this.closest('.product');
           let productName = product.querySelector('.bottom a').innerText;
           let productImgSrc = product.querySelector('img').src;
           let productPrice = product.querySelector('.price span').innerText;

          
           let productIndex = likedProducts.findIndex(item => item.name === productName);

           if (productIndex === -1) {
            
               likedProducts.push({
                   name: productName,
                   imgSrc: productImgSrc,
                   price: productPrice
               });

               
               let count = parseInt(heartCount.innerText);
               heartCount.innerText = count + 1;

              
               this.classList.remove('far');
               this.classList.add('fas');
           } else {
              
               likedProducts.splice(productIndex, 1);

               
               let count = parseInt(heartCount.innerText);
               heartCount.innerText = count - 1;

               this.classList.remove('fas');
               this.classList.add('far');
           }

        
           displayLikedProducts();
       });
   });

  
   liked.addEventListener('click', function() {
       sideMenu.classList.add('open');
       displayLikedProducts();
   });

   closeBtn.addEventListener('click', function() {
       sideMenu.classList.remove('open');
   });

   function displayLikedProducts() {
       likedProductsContainer.innerHTML = ''; 
       likedProducts.forEach(product => {
           likedProductsContainer.innerHTML += `
               <div class="productliked">
                <div class="likedimg">
                   <img src="${product.imgSrc}" alt="${product.name}">
                </div>
                <div class="liked-des">

                   <h4>${product.name}</h4>
                   <p>${product.price}</p>
                </div>
              </div>
           `;
       });
   }