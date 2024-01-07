const addDecRound=(num)=>{
    return (Math.round(num*100)/100).toFixed(2)
}

export const updateCart=(state)=>{
        state.itemsPrice=addDecRound(state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0))
        state.shippingPrice=addDecRound(state.itemsPrice>200?0:15)
        state.taxPrice=addDecRound(Number((0.18*state.itemsPrice).toFixed(2)))
        state.totalPrice=(Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.taxPrice)).toFixed(2)
        localStorage.setItem('cart',JSON.stringify(state))
        return state;
}