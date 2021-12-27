import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import Article from "./article";
import ArticleEdit from "./article-edit";

/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <>
      <Routes>
        <Route path={''} element={<Main/>}/>
        <Route path={"/articles/:id"} element={<Article/>}/>
        <Route path={"/articles/:id/edit"} element={<ArticleEdit/>}/>
      </Routes>
      {select.name === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
