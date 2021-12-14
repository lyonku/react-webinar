import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import ItemPage from './item-page';

/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <>
      <Main/>
      {select.name === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
