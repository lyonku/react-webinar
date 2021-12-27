import React from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import Select from "../select";
import './styles.css';
import '../input/styles.css';

function ArticleForm({article, categories, countries}) {

  // CSS классы по БЭМ
  const className = cn('ArticleForm');
  console.log(countries)
  return (
    <div className={className()}>
      <div className={className('Prop')}>
        <div className={className('Label')}>Название</div>
        <input className={className('Input')} value={article.title}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Описание</div>
        <textarea className={className('Description Input')} value={article.description}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Страна производитель</div>
        <Select options={countries}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Категория</div>
        <Select options={categories}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Год выпуска</div>
        <input className={className('Input')} value={article.edition}/>
      </div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Цена (₽)</div>
        <input className={className('Input')} value={article.price}/>
      </div>
      <button className={className('Submit')}>Сохранить</button>
      
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