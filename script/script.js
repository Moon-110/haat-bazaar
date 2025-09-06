//id--> element
//className-->array of element
//tagName-->array of element
//querySelector--> element(css)
//querySelectorAll--> array of element(css)

// const { createElement } = require("react");

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

// traverse technique
const cartBtns = document.getElementsByClassName('cart1-btn');
// console.log(cartButton);
for ( let cartButton of cartBtns){
    // console.log(cartBtn);
    cartButton.addEventListener('click', function(){
        // console.log('button clicked');
        // 1 const productImg =cartButton.parentNode.parentNode.childNodes[1].childNodes[1].src;
        const productImg=cartButton.parentNode.parentNode.children[0].children[0].src;

        
        const productTitle= cartButton.parentNode.parentNode.children[1].children[1].innerText;
        
         const productPrice= cartButton.parentNode.parentNode.children[1].children[2].children[0].innerText;
         console.log(productPrice)
        
         const totalPrice=getElement('total-price').innerText;

         const currentTotal = Number(productPrice)+Number(totalPrice);
         getElement('total-price').innerText=currentTotal;


         const cartContainer= getElement('cart-container');

         const newCart = document.createElement('div');
         newCart.innerHTML=`
         <div class=" bg-gray-200 rounded-xl flex justify-between items-center p-3">
        <img class="w-12" src="${productImg}" alt="">
            <div>
                <h2 class="font-bold">${productTitle}</h2>
                <h2 class="font-bold">${productPrice} TK</h2>
                        
            </div>
        </div>
     `;

     cartContainer.append(newCart);
    
})

}



//traditional way  
// document.getElementById('card1-kitchen-btn').addEventListener('click', function(){
//     const title = getElement('card1-title').innerText;
//     const price = getElement('card1-price').innerText;

//     // get total price 
//     const totalPrice = getElement('total-price').innerText;

//     // calculate price

//      currentTotal= Number(price)+Number(totalPrice);

//     // update price
//     getElement('total-price').innerText=currentTotal.toFixed(2);


//     // update card container

//     const cartContainer = getElement('cart-container');

//     // create div
//     const newCart=document.createElement('div');
//     newCart.innerHTML=`
//     <div class=" bg-gray-200 rounded-xl flex justify-between items-center p-3">
//         <img class="w-12" src="./assets/kitchen-1.png" alt="">
//             <div>
//                 <h2 class="font-bold">Product Name</h2>
//                 <h2 class="font-bold">450 TK</h2>
                        
//             </div>
//     </div>
    
//     `;

//     // cart-container append
//     cartContainer.append(newCart);
// })