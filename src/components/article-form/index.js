import React, {useState} from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import Select from "../select";
import './styles.css';
import '../input/styles.css';

function ArticleForm({article, categories, countries, onSave}) {

  const [data, setData] = useState(article)
  console.log(data)
  

  // CSS классы по БЭМ
  const className = cn('ArticleForm');
  return (
    <div className={className()}>
      <div className={className('Prop')}>
        <div className={className('Label')}>Название</div>
        <input className={className('Input')} value={data.title} onChange={(event) => setData({...data, title: event.target.value})}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Описание</div>
        <textarea className={className('Description Input')} defaultValue={article.description}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Страна производитель</div>
        <Select options={countries} />
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Категория</div>
        <Select options={categories} />
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Год выпуска</div>
        <input className={className('Input')} defaultValue={article.edition}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Цена (₽)</div>
        <input className={className('Input')} defaultValue={article.price}/>
      </div>
      <button className={className('Submit')} onClick={() => onSave(article._id, data)}>Сохранить</button>
      
    </div>
  )
}

ArticleForm.propTypes = {
  article: propTypes.object.isRequired
}

ArticleForm.defaultProps = {
  article: {},
}

export default React.memo(ArticleForm);