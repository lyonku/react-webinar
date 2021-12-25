import React, {useEffect, useRef} from "react";
import shallowequal from "shallowequal";

/**
 * Хук для асинхронных расчётов, которые будут исполнены при первом рендере или изменении inputs.
 * Так же позволяет отреагирваот на перехода по истории
 * @param callback {Function} Пользовательская функция
 * @param inputs {Array} Значения при смене которых callback снова исполнится.
 * @param options {{backForward}}
 */
export default function useInit(callback, inputs = [], options = {backForward: false}) {

  const last = useRef(null);
  if (!last.current || !equal(last.current, inputs)){
    last.current = inputs;
    callback();
  }

  // Если в истории браузера меняются только query-параметры, то react-router не оповестит
  // компонент об изменениях, поэтому хук можно явно подписать на событие изменения истории
  // браузера (если нужно отреагировать на изменения query-параметров при переходе по истории)
  useEffect(() => {
    if (options.backForward) {
      window.addEventListener('popstate', callback);
      return () => {
        window.removeEventListener('popstate', callback);
      };
    }
  }, inputs);
}


/**
 * Сравнение массивов
 * @param arr1
 * @param arr2
 * @return {boolean}
 */
function equal(arr1, arr2) {
  if (arr1 === arr2) return true
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
