import React from 'react';
import '../../styles/order/OrderProduct.css';

export default function OrderProduct () {
  return (
    <div className='Order-product'>
      <p>Café americano</p>
      <div className='Order-quantity'>
        <button className='Btn-product'><i class="fas fa-minus"></i></button>
        <p className='Order-number'>1</p>
        <button className='Btn-product'><i class="fas fa-plus"></i></button>
      </div>
      <div className='Order-price'>
      <p className='Order-number'>$5</p>
      <button className='Btn-product'><i class="fas fa-trash"></i></button>
      </div>
    </div>

  )
}