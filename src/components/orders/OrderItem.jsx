import React from "react";
import OrderItemValue from "./OrderItemValue";

const OrderItem = ({
  nit = "",
  status = "",
  bill = "",
  guide = "",
  name = "",
  date = "",
  transporter = "",
  direction = "",
}) => {
  return (
    <div className="bg-zinc-50">
      {/* Header */}
      <div className="p-2 pt-4 flex gap-9 bg-zinc-100 border-b-2 border-zinc-300">
        <p>
          {" "}
          Numero de pedido:{" "}
          <span className="text-durespo-100 font-medium"> 000000 </span>
        </p>
        <p> Fecha: 15-10-2022 </p>
      </div>

      <div className="columns-2 pb-8">
        <div className="px-3">
          <table className="table-fixed w-full">
            <tbody>
              <OrderItemValue name={"NIT"} value={nit} />
              <OrderItemValue name={"Estado"} value={status} />
              <OrderItemValue name={"Factura"} value={bill} bold={true} />
              <OrderItemValue name={"Guia"} value={guide} />
            </tbody>
          </table>
        </div>
        <div className="px-3">
          <table className="table-fixed w-full">
            <tbody>
              <OrderItemValue name={"Nombre"} value={name} />
              <OrderItemValue name={"Fecha"} value={date} />
              <OrderItemValue name={"Transportador"} value={transporter} />
              <OrderItemValue name={"Direccion"} value={direction} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
