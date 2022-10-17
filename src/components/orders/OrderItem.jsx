import React from "react";
import OrderItemValue from "./OrderItemValue";

const OrderItem = ({
  nit = "",
  orderId,
  status = "",
  bill = "",
  guide = "",
  name = "",
  date = "",
  transporter = "",
  direction = "",
  delayFade = 0
}) => {
  return (
    <div className="bg-zinc-50 opacity-0" style={{
      animationName: "fade",
      animationDuration: ".5s",
      animationDelay: `${delayFade}ms`,
      animationFillMode : "forwards"
    }}>
      {/* Header */}
      <div className="p-2 pt-4 flex gap-9 text-sm md:text-base bg-zinc-100 border-b-2 border-zinc-300">
        <p>
          {" "}
          Numero de pedido:{" "}
          <span className="text-durespo-100 font-medium"> {orderId} </span>
        </p>
        <p> Fecha: { date } </p>
      </div>

      <div className="columns-1 md:columns-2 md:pb-8">
        <div className="px-3">
          <table className="table-fixed w-full">
            <tbody>
              <OrderItemValue name={"NIT"} value={nit} />
              <OrderItemValue name={"Estado"} value={status} bold={true} />
              <OrderItemValue name={"Factura"} value={bill} />
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
