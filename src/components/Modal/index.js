import React from "react";
import './styles.css';

function Modal({active, setActive, store, items}) {
    // const totalPrice = store.state.basket.reduce((sum, current) => sum + current.price * current.count, 0);
    // const totalCount = store.state.basket.reduce((sum, current) => sum + current.count, 0);

    return (
        <div className={active ? 'Modal Modal__active' : 'Modal'} >
            
            <div className='Modal__content'>
            <div className='Modal__head'>
                <h1>Корзина</h1>
                <button onClick={() => setActive(false)}>Закрыть</button>
            </div>
            <div className='Modal__controls'></div>
            <div className='Modal__list '>{items.map(item =>
                <div key={item.code}>
                    <div className='Modal__item'>
                        {/* <div className='Modal__item_number'>{store.state.basket.findIndex(i => i.code == item.code)+1}</div>
                        <div className='Modal__item_title'>{item.title}</div>
                        <div className='Modal__item_price'>{new Intl.NumberFormat().format(item.price)} &#8381;</div>
                        <div className='Modal__item_count'>{item.count} шт</div> */}
                    </div>
                </div>
            )}
            </div>  
            {/* <div className='Modal__total'><span>Итого</span> <span>{new Intl.NumberFormat().format(totalPrice)} &#8381;</span> <span>{totalCount} шт</span></div> */}
            </div>
        </div>
    )
}

export default React.memo(Modal);