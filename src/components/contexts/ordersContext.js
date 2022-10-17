import { createContext } from "react";

const OrdersContext = createContext({
  orderDoc : "",
  setOrderDoc: null
});
export default OrdersContext;
