import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div className="summary-cont">
            <h1 className="head">
              <span className="label">Order Total:</span> Rs {total}/-
            </h1>
            <p className="para">{cartList.length} Items in cart</p>
            <button className="btn10 d-sm-none" type="button">
              Checkout
            </button>
          </div>
          <button className="btn10 d-lg-none" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
