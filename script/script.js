//id--> element
//className-->array of element
//tagName-->array of element
//querySelector--> element(css)
//querySelectorAll--> array of element(css)

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

document.getElementById('card1-kitchen-btn').addEventListener('click', function(){
    const title = getElement('card1-title').innerText;
    const price = getElement('card1-price').innerText;

    // get total price 
    const totalPrice = getElement('total-price').innerText;

    // calculate price

     currentTotal= Number(price)+Number(totalPrice);

    // update price
    getElement('total-price').innerText=currentTotal.toFixed(2);


    // update card container

    const cartContainer = getElement('cart-container');

    // create div
    const newCart=document.createElement('div');
    newCart.innerHTML=`
    <div class=" bg-gray-200 rounded-xl flex justify-between items-center p-3">
        <img class="w-12" src="./assets/kitchen-1.png" alt="">
            <div>
                <h2 class="font-bold">Product Name</h2>
                <h2 class="font-bold">450 TK</h2>
                        
            </div>
    </div>
    
    `;

    // cart-container append
    cartContainer.append(newCart);
})