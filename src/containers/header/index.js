import React, {useCallback, useMemo} from "react";
import Menu from "../../components/menu";
import BasketSimple from "../../components/basket-simple";
import LayoutSides from "../../components/layout-sides";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";

function Header() {

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const options = {
    menuItems: useMemo(() => ([
      {key: 1, title: 'Главная', link: '/'},
    ]), [])
  }

  const store = useStore();

  const callbacks = {
    openModal: useCallback(() => store.modals.open('basket'), [store]),
  }

  return (
    <LayoutSides
      left={<Menu items={options.menuItems}/>}
      right={<BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>}
    />
  );
}

export default React.memo(Header);
