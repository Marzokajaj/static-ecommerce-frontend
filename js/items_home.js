fetch('products.json')
.then(response => response.json())
.then(data => {
    const swiper_items_sale = document.getElementById('swiper_items_sale')
    const swiper_electronics_sale = document.getElementById('swiper_electronics_sale')
    const swiper_appliances_sale = document.getElementById('swiper_appliances_sale')
    const swiper_mobiles_sale = document.getElementById('swiper_mobiles_sale')

    data.forEach(product => {

        if(product.old_price){

            const price_disc=Math.floor((product.old_price - product.price) / product.old_price * 100)

            swiper_items_sale.innerHTML +=`
                    <div class="swiper-slide product">
                        <span class="sale_present">%${price_disc}</span>
                        <a href=""><img src=${product.img} alt=""></a>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a>${product.name}</a></p>
                        <div class="price">
                            <span>$${product.price}</span>
                            <div class="old_price">
                                <p>$${product.old_price}</p>
                            </div>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart" data_id = ${product.id}>
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
            `
        }


    })



    data.forEach(product => {

        if(product.catetory == "electronics"){

            const old_price_phargrahp = product.old_price ? `<p>$${product.old_price}</p>` : "";

            const price_disc= Math.floor((product.old_price - product.price) / product.old_price * 100) ;
            
            const price_disc_span = product.old_price ? `<span class="sale_present">%${price_disc}</span>` : "";

            swiper_electronics_sale.innerHTML +=`
                    <div class="swiper-slide product">
                        ${price_disc_span}
                        <a href=""><img src=${product.img} alt=""></a>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a>${product.name}</a></p>
                        <div class="price">
                            <span>$${product.price}</span>
                            <div class="old_price">
                                ${old_price_phargrahp}
                            </div>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart" data_id = ${product.id}>
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
            `
        }

        
    })



    data.forEach(product => {

        if(product.catetory == "appliances"){

            const old_price_phargrahp = product.old_price ? `<p>$${product.old_price}</p>` : "";

            const price_disc= Math.floor((product.old_price - product.price) / product.old_price * 100) ;
            
            const price_disc_span = product.old_price ? `<span class="sale_present">%${price_disc}</span>` : "";

            swiper_appliances_sale.innerHTML +=`
                    <div class="swiper-slide product">
                        ${price_disc_span}
                        <a href=""><img src=${product.img} alt=""></a>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a>${product.name}</a></p>
                        <div class="price">
                            <span>$${product.price}</span>
                            <div class="old_price">
                                ${old_price_phargrahp}
                            </div>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart" data_id = ${product.id}>
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
            `
        }

        
    })




    data.forEach(product => {

        if(product.catetory == "mobiles"){

            const old_price_phargrahp = product.old_price ? `<p>$${product.old_price}</p>` : "";

            const price_disc= Math.floor((product.old_price - product.price) / product.old_price * 100) ;
            
            const price_disc_span = product.old_price ? `<span class="sale_present">%${price_disc}</span>` : "";

            swiper_mobiles_sale.innerHTML +=`
                    <div class="swiper-slide product">
                        ${price_disc_span}
                        <a href=""><img src=${product.img} alt=""></a>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a>${product.name}</a></p>
                        <div class="price">
                            <span>$${product.price}</span>
                            <div class="old_price">
                                ${old_price_phargrahp}
                            </div>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart" data_id = ${product.id}>
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
            `
        }

        
    })


}
)