const cart = document.getElementById("cart");
const nav_links = document.getElementById("nav_links");

function show_hide_cart() {
    if (cart) {
        cart.classList.toggle("active");
    }
}

function show_nav_links() {
    if (nav_links) {
        nav_links.classList.toggle("active");
    }
}



fetch('products.json')
.then(response => response.json())
.then(data => {
    const btn_add_cart = document.querySelectorAll(".btn_add_cart");
    btn_add_cart.forEach( button =>
        button.addEventListener("click" , (event) =>{
            const product_id = event.currentTarget.getAttribute('data_id');
            const selected_product = data.find( product => product.id == product_id)            

            const item_selected = document.querySelectorAll(`.btn_add_cart[data_id="${product_id}"]`)

            item_selected.forEach( btn =>{
                btn.classList.add("active");
                btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>item added`

            })
            add_item_to_localstorage(selected_product);
        })
    )
})




function add_item_to_localstorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let existingProduct = cart.find(item => item.id == product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    update_cart();
}




function update_cart(){
    const add_item_to_cart = document.querySelectorAll(".items_cart")
    const cart_items = JSON.parse(localStorage.getItem('cart')) || []

    add_item_to_cart.forEach( btn =>{
        btn.innerHTML ="";
    })

    cart_items.forEach((item , index) =>{
        add_item_to_cart.forEach( btn =>{

        btn.innerHTML +=`
            <div class="item">
                <img src="${item.img}" alt="">

                <div class="content_product">    
                    <p>${item.name}</p>
                    <div class="price">$${item.price}</div>
                    <div class="quantity_control">
                        <button onclick="decrease_quantity_of_product_in_cart(${item.id})" class="decrease_quantity">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="increase_quantity_of_product_in_cart(${item.id})" class="increase_quantity">+</button>
                        <!--<i class="fa-solid fa-square-plus "></i>-->
                    </div>
                </div>
                    
                <button onclick="remove_item_from_cart(${item.id})" class="delete_item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `
    })
    })

    subtotal()
    cart_items_number()
    console.log(cart_items)
}




function update_button_state(){
    const cart_items = JSON.parse(localStorage.getItem("cart"))||[]

    cart_items.forEach((item , index) =>{
        const btn_in_cart = cart_items[index].id;
        const item_selected = document.querySelectorAll(`.btn_add_cart[data_id="${btn_in_cart}"]`)
        console.log(item_selected)
        item_selected.forEach( btn =>{
            console.log(1999999)
            btn.classList.add("active");
            btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>item added`
        })         
    })
}



function remove_item_from_cart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => item.id != productId);

    localStorage.setItem('cart', JSON.stringify(cart));

    const item_selected = document.querySelectorAll(`.btn_add_cart[data_id="${productId}"]`);

    item_selected.forEach(btn => {
        btn.classList.remove("active");
        btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>add to cart`;
    });

    update_cart();
}

function increase_quantity_of_product_in_cart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const selected_product = cart.find(product => product.id == productId);

    if (selected_product) {
        selected_product.quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    update_cart();
}

function decrease_quantity_of_product_in_cart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const selected_product = cart.find(product => product.id == productId);

    if (selected_product && selected_product.quantity > 1) {
        selected_product.quantity -= 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    update_cart();
}



function cart_items_number(){
    const cart_items =JSON.parse(localStorage.getItem('cart')) || []
    document.getElementById('cartLength').innerHTML = cart_items.length; // Update cart length
    document.querySelector('.count-item-header').innerHTML = cart_items.length    
}






function subtotal(){
    const cart_items = JSON.parse(localStorage.getItem('cart')) || []
    let totalPrice = 0 
    cart_items.forEach(item => {
        totalPrice += item.price * item.quantity; // Calculate total price
    })
    document.getElementById('totalprice').textContent = `$${totalPrice}`;
    setTimeout(subtotal_in_order_summary,500);
};














function subtotal_in_order_summary() {

    const priceElement = document.getElementById('price');
    const shoppingElement = document.getElementById('shopping');
    const totalPriceInSummaryElement = document.getElementById('total_price_in_summary');

    if (!priceElement || !shoppingElement || !totalPriceInSummaryElement) {
        return;
    }

    const cart_items = JSON.parse(localStorage.getItem('cart')) || [];

    let totalPrice = 0;
    let shopping = 20;

    cart_items.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    priceElement.textContent = `$${totalPrice}`;
    shoppingElement.textContent = `$${shopping}`;
    totalPriceInSummaryElement.textContent = `$${totalPrice + shopping}`;
}


update_cart();
setTimeout(update_button_state, 1000); // Delay in milliseconds (2000 ms = 2 seconds)
