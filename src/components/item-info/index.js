import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";

function ItemInfo(props) {
    if(props.itemInfo) {
        return (
            <div className='ItemInfo'>
            <p className='ItemInfo__description'>{props.itemInfo.description}</p>
            <p className='ItemInfo__madeIn'>Страна производитель: <strong>{`${props.itemInfo.maidIn.title} ${props.itemInfo.maidIn.code}`}</strong></p>
            <p className='ItemInfo__category'>Категория: <strong>{props.itemInfo.category.title}</strong></p>
            <p className='ItemInfo__edition'>Год выпуска: <strong>{props.itemInfo.edition}</strong></p>
            <h3 className='ItemInfo__price'>Цена: {numberFormat(props.itemInfo.price || 0)} ₽</h3>
            <button className='ItemInfo__add-button' onClick={props.onAdd}>Добавить</button>
    </div>
          );
    } else {
        return <div>Загрузка</div>;
    }
  
}

export default React.memo(ItemInfo);