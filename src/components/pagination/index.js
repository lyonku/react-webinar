import React from 'react';
import './styles.css';
import useStore from "../../utils/use-store";

function Pagination(props) {

    const store = useStore();
    if (props.pages == 0) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className='Pagination__list'>
                {[ ...Array(props.pages).keys() ].map((item, index) => 
                    <button
                        className={index == props.page ? 'Pagination__button_current' : 'Pagination__button'} 
                        key={index} 
                        onClick={() => {
                            store.catalog.load(index)
                        }}
                    >
                        {index + 1}
                    </button>
                )}
            </div>
        )
    }
}

export default React.memo(Pagination);