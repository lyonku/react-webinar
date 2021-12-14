import React, {useContext} from "react";
import {StoreContext} from "../store/provider";

/**
 * Хук для доступа к объекту хранилища
 * @return {Store}
 */
export default function useStore(){
  return useContext(StoreContext);
}