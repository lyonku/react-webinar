import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import ItemPage from './item-page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/items/:itemId" element={<ItemPage />} />
        </Routes>
        {select.name === 'basket' && <Basket/>}
      </BrowserRouter>
    </>
  );
}

export default React.memo(App);
