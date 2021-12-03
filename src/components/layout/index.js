import React from "react";
import './styles.css';

function Layout({head, content, children}){
  return (
    <div className='Layout'>
      <div className='Layout__head'>
        {head}
      </div>
      <div className='Layout__center'>
        {content || children}
      </div>
    </div>
  )
}

export default React.memo(Layout);