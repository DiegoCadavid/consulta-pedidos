import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

import { useParams, useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

// Por un error del cors no pude obtener la data de la api de durespo asi 
// que simularemos que obtenemos su data por fake data
import fakeData from "./fakeData.json";

// Cambie su valor para similar un error en la http response
const errorHttpFake = false;

const OrdersContainer = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    // Aqui se realizaria la http response
    setTimeout(() => {

      if(errorHttpFake) {
        // Asi se gestionarian los errores en el catch
        return navigate('/');
      }

      setData(fakeData.resultado);

      setIsLoading(false);
    }, 1500);
  }, [orderId]);

  return (
    <>
      {!isLoading ? (
        <div className="flex-grow flex flex-col gap-8 mx-16 py-8">
          <div className="text-durespo-100 font-medium text-xl">
            Pedidos de {orderId}
          </div>
          {data.map(
            ({
              nit,
              estado,
              factura,
              numGuia,
              sucursal,
              fechaPedido,
              transportadora,
              direccion,
            } , i) => {
              return (
                <OrderItem
                  key={i}
                  nit={nit}
                  status={estado}
                  bill={factura}
                  guide={numGuia}
                  name={sucursal}
                  date={fechaPedido}
                  transporter={transportadora}
                  direction={direccion}
                />
              );
            }
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default OrdersContainer;
