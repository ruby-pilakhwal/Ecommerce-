const data = [
    {
        id: 1,
        name: "Party Embroidered & Sequined with Scallop Border Art Silk Yellow Saree with Unstitched Blouse",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1999,
        cat: "saree"
    },
    {
        id: 22,
        name: "Woven Dobby Embroidered Kurta With Pant & Dupatta- Black (Set of 3) ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/2/f25b334ST022580D4FS_1.jpg?rnd=20200526195200&tr=w-512",
        price: 3159,
        cat: "Salwar Suit"
    },
    {
        id: 2,
        name: "Womens Floral Printed Rayon Co Ord (Set of 2)",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1599,
        cat: "Salwar Suit"
    },
    {
        id: 41,
        name: "Originals Just Black Men Oversized Hoodie",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/7/f747997240176_1.jpg?rnd=20200526195200&tr=w-900",
        price: 1899,
        cat: "Hoodies"
    },
    {
        id: 3,
        name: "Wine Satin Solid Embellished and Sequined Saree",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/e/ae5e6a1HLIKAA00003648_1.jpg?rnd=20200526195200&tr=w-256",
        price:999,
        cat: "saree"
    },
    {
        id: 4,
        name: "Modern Metallic Gold Tone With Leaf Sequined Border saree",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/3/931174eNK_NYRIX00001603_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1899,
        cat: "saree"
    },
    {
        id: 5,
        name: "Party Modern Embroidered Contrast Scallop Border Georgette Blue Saree",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001808_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1799,
        cat: "saree"
    },
    {
        id: 6,
        name: "Off White Net Saree Faux Mirror Embroidery & Lehariya Frill with Unstitched Blouse",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/5/e5e12b6TI6512Cream_1.jpg?rnd=20200526195200&tr=w-256",
        price: 2000,
        cat: "saree"
    },
    {
        id: 7,
        name: "Traditional Leheriya Heavy Border & Sequinned Georgette Red Saree & Unstitched Blouse",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/4/84edd9cPiyush-NK1112_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1700,
        cat: "saree"
    },
    {
        id: 8,
        name: "Blue Solid Cotton Viscose Saree With Tassled Pallu and Without Blouse",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/c/2c8e14bTGAJRA00003885_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1800,
        cat: "saree"
    },
    {
        id: 9,
        name: "Pink Georgette Floral Embroidery and Sequins Saree with Unstitched Blouse",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/1/d10643dLIKPFSAR09-Beige_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1500,
        cat: "saree"
    },
    {
        id: 10,
        name: "Party Modern Embroidered with Heavy Border Organza Brown Saree",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001805_1.jpg?rnd=20200526195200&tr=w-256",
        price: 1400,
        cat: "saree"
    },
    {
        id: 11,
        name: "Rishi Vibhuti Yellow Printed Top, Sharara & Jacket Co-ord Set (Set of 3)",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/a/ca81ffaNFX_GAJRA00005275_1.jpg?rnd=20200526195200&tr=w-512",
        price: 7225,
        cat: "Salwar Suit"
    },
    {
        id: 23,
        name: "Women Yellow Silk Blend Embroidered Flared Kurta  ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/b/5ba4ae9AHIKA00001366_1.jpg?rnd=20200526195200&tr=w-512",
        price: 3000,
        cat: "Salwar Suit"
    },
    {
        id: 24,
        name: "Yoke Embroidered & Sequenced Purple Kurta with Pant & Dupatta (Set of 3)",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/1/1160d80Kasturi-Begani_0.jpg?rnd=20200526195200&tr=w-512",
        price: 1899,
        cat: "Salwar Suit"
    },
    {
        id: 25,
        name: "Womens Printed And Embroidered Rayon Kurta Pant Dupatta (Set of 3)",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/4/9491262KPDTURQRANGOON_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1296,
        cat: "Salwar Suit"
    },
    {
        id: 26,
        name: "Floral Printed Kurta with Pant & Dupatta -Mult Color (Set of 3) ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/0/d0e6870BS-3138_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1705,
        cat: "Salwar Suit"
    },
    {
        id: 27,
        name: "Woven Dobby Embroidered Kurta With Pant & Dupatta- Black (Set of 3) ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/2/f25b334ST022580D4FS_1.jpg?rnd=20200526195200&tr=w-512",
        price: 3159,
        cat: "Salwar Suit"
    },
    {
        id: 28,
        name: "Women Chanderi Embroidered Purple Kurta and Pant with Dupatta (Set of 3) ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/f/efbbd55BS3160FC_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1913,
        cat: "Salwar Suit"
    },
    {
        id: 31,
        name: "Men's Black Self Design Shirt With Collar ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/6476ae6SH-30087-BLACK_0.jpg?rnd=20200526195200&tr=w-512",
        price: 600,
        cat: "Casual Shirt"
    },
    {
        id: 32,
        name: "Sports Pure Brown Cotton Slim Casual Shirt",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/d/0d9a535ASADOSH1771_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1625,
        cat: "Casual Shirt"
    },
    {
        id: 33,
        name: "Men's Lavender Minimal Aztec Shirt",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/7/c702bd4VRS24_CSMSSRT5800PLUS_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1250,
       cat: "Casual Shirt"
    },
    {
        id: 34,
        name: "Men Chalk White Twisted Crease Shirt",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/3/03d408cCS24CSMSSRT6088_1.jpg?rnd=20200526195200&tr=w-512",
        price: 855,
        cat: "Casual Shirt"
    },
    {
        id: 35,
        name: "Sports Micro Check Oxford Casual Shirt ",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/d/bdefcf4ASADOSH01836_1.jpg?rnd=20200526195200&tr=w-512",
        price: 850,
         cat: "Casual Shirt"
    },
    {
        id: 28,
        name: "Men's Pure Linen Pink Solid Regular Fit Full Sleeve Casual Shirt",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/7/f75f126LCSFSD6700247_1.jpg?rnd=20200526195200&tr=w-512",
        price: 690,
        cat: "Casual Shirt"
    },
   
    {
        id: 42,
        name: "Men Solid Relaxed white Hoodies And Sweatshirts Ecru Cotton",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/1/e155cde7005758211_0.jpg?rnd=20200526195200&tr=w-512",
        price: 999,
        cat: "Hoodies"
    },
    {
        id: 43,
        name: "Men Yellow Kurta",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad5a808KISAH-KA-0725_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1999,
        cat: "Kurtas"
    },
    {
        id: 51,
        name: "Yellow Georgette Maxi Skirt with Can Can",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/i/s/isk00512_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1300,
        cat: "Ethnic Skirt"
    },
    {
        id: 51,
        name: "Women Yellow Silk Blend Embroidered Kurta Trousers with Dupatta (Set of 3)",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/b/5ba4ae9AHIKA00003468_1.jpg?rnd=20200526195200&tr=w-512",
        price: 1500,
        cat: "Salwar Suit"
        
    },
    {
        id: 51,
        name: "Women Yellow Solid Embroidered Anarkali Kurta with Palazzo & Dupatta (Set of 3)",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/b/5ba4ae9AHIAA00000653_1.jpg?rnd=20200526195200&tr=w-512",
        price: 2000,
        cat: "Salwar Suit"
        
    },

];
const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".pricevalue");
const sortSelect = document.querySelector("#sort");

let filteredProducts = [...data];

let currentSearch = "";
let currentCategory = "All";
let currentMaxPrice = Math.max(...data.map(item => item.price));
let currentSort = "";
const shortenName = (name, limit = 8) => {
    const words = name.split(" ");
    if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
    }
    return name;
};


const displayProduct = (products) => {
    productContainer.innerHTML = products.map(
        (product) => `
        <div class="box">
            <div class="product">
                <img src=${product.img} />
            </div>
            <div class="pro-desc">
            <span class="name">${shortenName(product.name)}</span>
            <div class="price-cart">
             <span class="Price">₹${product.price}</span>
            <button class="addCart">ADD TO CART</button></div>
            </div>
           
            
        </div>`
    ).join("");
};
const filterProducts = () => {
    let tempProducts = [...data];

  
    if (currentSearch) {
        tempProducts = tempProducts.filter((item) => item.name.toLowerCase().includes(currentSearch));
    }

    if (currentCategory !== "All") {
        tempProducts = tempProducts.filter((item) => item.cat === currentCategory);
    }

    
    tempProducts = tempProducts.filter((item) => item.price <= currentMaxPrice);

    tempProducts = sortProducts(currentSort, tempProducts);

    displayProduct(tempProducts);
};

const setCategories = () => {
    const allCategories = data.map(item => item.cat);
    const categories = ["All", ...new Set(allCategories)];

    categoriesContainer.innerHTML = categories.map(cat =>
        `<span class="cat">${cat}</span>`
    ).join("");

    categoriesContainer.addEventListener("click", (e) => {
        currentCategory = e.target.textContent;
        filterProducts();  
    });
};


const setPriceRange = () => {
    const prices = data.map(item => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "₹" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        currentMaxPrice = e.target.value;
        priceValue.textContent = "₹" + currentMaxPrice;
        filterProducts();  
    });
};


const sortProducts = (type, products) => {
    if (type === "lowToHigh") {
        return products.sort((a, b) => a.price - b.price);
    } else if (type === "highToLow") {
        return products.sort((a, b) => b.price - a.price);
    } else {
        return products;
    }
};

sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    filterProducts();  
});


searchInput.addEventListener("keyup", (e) => {
    currentSearch = e.target.value.toLowerCase();
    filterProducts();
});

setCategories();
setPriceRange();
displayProduct(filteredProducts);

 document.addEventListener("DOMContentLoaded", function() {
        const openBtn = document.querySelector(".filter-btn");
        const closeBtn = document.querySelector(".close-filter");
        const leftMenu = document.querySelector(".leftmenu");

      
        openBtn.addEventListener("click", function() {
            leftMenu.classList.add("active");
        });

        closeBtn.addEventListener("click", function() {
            leftMenu.classList.remove("active");
        });
    });

    const cart = [];
    const cartOverlay = document.querySelector(".cart-overlay");
const cartSideMenu = document.querySelector(".cart-side-menu");
const cartItemsContainer = document.querySelector(".cart-items");
const cartCounter = document.querySelector(".count");
const totalPriceElement = document.querySelector(".total-price");
let cartCount = 0;

const addToCart = (product) => {
    const existingProduct = cart.find(item => item.product.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }

    cartCount++;
    cartCounter.textContent = cartCount;
    updateCartItems();
    openCart();
};

const updateCartItems = () => {
    
    cartItemsContainer.innerHTML = cart.map(item => 
        `
        <div class="cart-item">
            <img src=${item.product.img} alt=${item.product.name} />
            <div class="cart-item-details">
                <span class="namemenu">${shortenName(item.product.name, 4)}</span>
                <span class="pricemenu">₹${item.product.price * item.quantity}</span>
                <div class="quantity-controls">
                    <button class="decrement" data-id="${item.product.id}">-</button>
                    <span class="quantity-cart">${item.quantity}</span>
                    <button class="increment" data-id="${item.product.id}">+</button>
                </div>
            </div>
        </div>
    `
).join("");

    document.querySelectorAll(".increment").forEach(button => {
        button.addEventListener("click", (e) => changeQuantity(e, "increment"));
    });

    document.querySelectorAll(".decrement").forEach(button => {
        button.addEventListener("click", (e) => changeQuantity(e, "decrement"));
    });

    updateTotalPrice();
};

const changeQuantity = (e, action) => {
    const productId = parseInt(e.target.getAttribute("data-id"));
    const cartItem = cart.find(item => item.product.id === productId);

    if (action === "increment") {
        cartItem.quantity++;
        cartCount++;
    } else if (action === "decrement" && cartItem.quantity > 1) {
        cartItem.quantity--;
        cartCount--;
    } else if (action === "decrement" && cartItem.quantity === 1) {
        cart.splice(cart.indexOf(cartItem), 1); 
        cartCount--;
    }

    cartCounter.textContent = cartCount;
    updateCartItems();
};

const updateTotalPrice = () => {
    const total = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    totalPriceElement.textContent = `Total: ₹${total}`;
};


const openCart = () => {
    cartSideMenu.classList.add("active");
    cartOverlay.classList.add("active");
};

const closeCart = () => {
    cartSideMenu.classList.remove("active");
    cartOverlay.classList.remove("active");
};

document.querySelector(".close-cart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);



document.querySelectorAll(".addCart").forEach((button, index) => {
    button.addEventListener("click", () => addToCart(filteredProducts[index]));
});

document.querySelector(".close-cart").addEventListener("click", closeCart);
