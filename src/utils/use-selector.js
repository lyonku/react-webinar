import React, {useEffect} from "react";
import shallowequal from 'shallowequal';
import useStore from "./use-store";

/**
 * Хук для выборки данных из store
 * @param selector {Function}
 * @return {unknown}
 */
export default function useSelector(selector){

  const store = useStore();

  const [state, setState] = React.useState(selector(store.getState()));

  useEffect(() => {
    return store.subscribe(newState => {
      const result = selector(newState);
      if (!shallowequal(state, result)) {
        setState(result);
      }
    });
  }, [state]);

  return state;
}