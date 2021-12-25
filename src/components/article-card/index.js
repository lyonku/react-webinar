import React from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import './styles.css';
import numberFormat from "../../utils/number-format";

function ArticleCard({article, onAdd}) {

  // CSS классы по БЭМ
  const className = cn('ArticleCard');

  return (
    <div className={className()}>
      <div className={className('Description')}>{article.description}</div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Страна производитель:</div>
        <div className={className('Value')}>{article.maidIn?.title} ({article.maidIn?.code})</div>
      </div>

      <div className={className('Prop')}>
        <div className={className('Label')}>Категория:</div>
        <div className={className('Value')}>{article.category?.title}</div>
      </div>

      <div className={className('Prop')}>
        <div className={className('Label')}>Год выпуска:</div>
        <div className={className('Value')}>{article.edition}</div>
      </div>

      <div className={className('Prop', {size: 'big'})}>
        <div className={className('Label')}>Цена:</div>
        <div className={className('Value')}>{numberFormat(article.price)} ₽</div>
      </div>

      <button onClick={() => onAdd(article._id)}>Добавить</button>
    </div>
  )
}

ArticleCard.propTypes = {
  article: propTypes.object.isRequired,
  onAdd: propTypes.func
}

ArticleCard.defaultProps = {
  article: {},
  onAdd: () => {}
}

export default React.memo(ArticleCard);
