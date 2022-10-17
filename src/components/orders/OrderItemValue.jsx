import React from "react";

const OrderItemValue = ({ name = "", value = "", bold= false }) => {
  return (
    <tr>
      <td className="p-2"> {name} </td>
      <td className={`p-2 ${ bold && "font-medium text-durespo-100"} ${ value == "" && "text-zinc-300 italic"  } `}> { value != "" ?  value : "vacio"} </td>
    </tr>
  );
};

export default OrderItemValue;
