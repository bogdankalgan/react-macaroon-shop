import CartAddMoreItems from './CartAddMoreItems';

function CartAddMore() {
    return (
        <div>
            <div style={{textAlign: "center", marginBottom: "40px"}}>
             <h2 className="titleSecond">Добавить в заказ</h2>
            </div>
        <CartAddMoreItems/>
        </div>
    )
}

export default CartAddMore;