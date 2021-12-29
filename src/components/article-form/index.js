import React, {useState, useCallback} from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import Select from "../select";
import './styles.css';
import '../input/styles.css';

function ArticleForm({article, categories, countries, onSave, error}) {

  const [data, setData] = useState(article)

  const onChange = (event) => setData({...data, [event.target.name]: event.target.value});

  // CSS классы по БЭМ
  const className = cn('ArticleForm');

  return (
    <div className={className()}>
      <div className={className('Prop')}>
        <div className={className('Label')}>Название</div>
        <input className={className('Input')} value={data.title} onChange={}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Описание</div>
        <textarea className={className('Description Input')} value={data.description} onChange={(event) => setData({...data, description: event.target.value})}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Страна производитель</div>
        <Select options={countries} value={data?.maidIn?._id} onChange={_id => setData({...data, maidIn: { _id }})}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Категория</div>
        <Select options={categories} value={data?.category?._id} onChange={_id => setData({...data, category: { _id }})}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Год выпуска</div>
        <input className={className('Input')} value={data.edition} onChange={(event) => setData({...data, edition: event.target.value})}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Цена (₽)</div>
        <input className={className('Input')} value={data.price} onChange={(event) => setData({...data, price: event.target.value})}/>
      </div>
      <button className={className('Submit')} onClick={() => onSave(article._id, data)}>Сохранить</button>
      {error && (
        <div className={className('Error')}>ERROR: {error.message}</div>
      )}
    </div>
  )
}

ArticleForm.propTypes = {
  article: propTypes.object.isRequired,
  onSave: propTypes.func,
  onChange: propTypes.func
}

ArticleForm.defaultProps = {
  article: {},
  onChange: () => {
  }
}

export default React.memo(ArticleForm);