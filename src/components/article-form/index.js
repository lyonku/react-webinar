import React, {useState, useCallback} from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import Select from "../select";
import Input from '../input';
import Textarea from '../textarea';
import './styles.css';
import '../input/styles.css';

function ArticleForm({article, categories, countries, onSave, error}) {

  const [data, setData] = useState(article)
  
  const onInputChange = useCallback(name => {
    return (value) => setData({...data, [name]: value});
  }, []);

  // CSS классы по БЭМ
  const className = cn('ArticleForm');
  return (
    <div className={className()}>
      <div className={className('Prop')}>
        <div className={className('Label')}>Название</div>
        <Input className='Input' value={data.title} onChange={onInputChange('title')}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Описание</div>
        <Textarea className='Description Input' value={data.description} onChange={onInputChange('description')}/>
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
        <Input className='Input' value={data.edition} onChange={onInputChange('edition')}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Цена (₽)</div>
        <Input className='Input' value={data.price} onChange={onInputChange('price')}/>
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