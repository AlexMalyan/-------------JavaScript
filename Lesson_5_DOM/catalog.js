'use strict';

// Наши товары здесь
const goods = [
  {
    id_product: 3,
    img: 'https://ae01.alicdn.com/kf/Hf91cba5da2654e51ba617c7192562c3fE/Orange-Mia-M34-011-c.jpg_Q90.jpg',
    product_name: 'Смеситель Orange Mia M34-011 двухзахватный для раковины c поворотным изливом без донного клапана, цвет: графит, никель',
    price: 8019,
    quantity: 1,
  },
  {
    id_product: 4,
    img: 'https://ae01.alicdn.com/kf/H6c1634bdfea74779b7be313b322234c5c/Bagnolux.jpg_Q90.jpg',
    product_name: 'Bagnolux матовый никель, латунная раковина, черный шланг с креплением, вытяжной двойной распылитель, сопло, смеситель, кран для воды, кухонный кран',
    price: 11091,
    quantity: 2,
  },
  {
    id_product: 305,
    img: 'https://ae01.alicdn.com/kf/U2b4010f75dca4543b2fa10285c53f654X/Pure-IDDIS.jpg_Q90.jpg',
    product_name: 'Смеситель для кухни с каналом для фильтрованной воды, Pure, IDDIS, PURSBFBi05',
    price: 14590,
    quantity: 1,
  },
];

// Так выглядит товар в каталоге
const cartItem = {
  render(good) {
    return `<div class='card'>
                      <div class='card-content'>
                        <div class='top-bar'>
                          <span>
                           ЦЕНА: &#8381; ${good.price}
                          </span>
                          <span class='float-right lnr lnr-heart'></span>
                        </div>
                        <div class='img'>
                          <img src=' ${good.img}'>
                        </div>
                        </div>
                        <div class='card-description'>
                            <div class='title'>
                              ${good.product_name}
                            </div>
                            <div class='cart'>
                              <span class='lnr lnr-cart'></span>
                            </div>
                            
                            </div>
                            <div class='card-footer'>
                            <div class='span'>
                              На складе: ${good.quantity}
                            </div>
                            <button class='span add-to-cart'>
                              ДОБАВИТЬ
                            </button>
                        </div> 
            </div>`;
  }
}
// формируем каталог динамически

const productItem = {
  cartListBlock: null,
  clearCartButton: null,
  cartItem,
  init() {
    this.cartListBlock = document.querySelector('.container');
    // this.clearCartButton = document.querySelector('.add-to-cart');
    // this.clearCartButton.addEventListener('click', () => this.clearCart());

    this.render();
  },
  toCart() {
    this.clearCartButton = document.querySelectorAll('.add-to-cart');
    console.log(this.clearCartButton);
    // this.clearCartButton.addEventListener('click', () => {
    //   console.log("Button clicked.");
    // });
    this.render();
  },

  render() {
    if (goods.length) {
      goods.forEach(good => {
        this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
      })

      // https://qna.habr.com/q/240483 здесь смотрим методом for
      this.clearCartButton = document.querySelectorAll('.add-to-cart');
      console.log(this.clearCartButton);

    }

  },



  clearCart() {
    goods = [];
    this.render();
  },


}



const cart = {
  cartListBlock: null,
  clearCartButton: null,
  cartItem,

  init() {
    this.cartListBlock = document.querySelector('.container');
    this.clearCartButton = document.querySelector('.cart-btn');
    this.clearCartButton.addEventListener('click', () => this.clearCart());

    this.render();
  },
  render() {
    if (goods.length) {
      goods.forEach(good => {
        this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
      });
      this.cartListBlock.insertAdjacentHTML('beforeend', `
      <div class="footer">
        <p class="total">В корзине  ${goods.length} шт. стоимостью  &#8381; ${this.getCartPrice()} </p>
      </div>
      `);
    } else {
      this.cartListBlock.textContent = 'Корзина пуста';
    }
  },
  getCartPrice() {
    return goods.reduce(function (price, good) {
      return price + good.price * good.quantity;
    }, 0);
  },
  sklonenie(number, txt) {
    let cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  },
  clearCart() {
    goods = [];
    this.render();
  },

};
productItem.init();
// productItem.toCart();

