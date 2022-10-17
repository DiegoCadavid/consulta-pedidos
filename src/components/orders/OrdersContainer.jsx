import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import OrderItem from "./OrderItem";

import { useParams, useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

// Por un error del cors no pude obtener la data de la api de durespo asi
// que simularemos que obtenemos su data por fake data
import fakeData from "./fakeData.json";
import OrderFilter from "./OrderFilter";

// Cambie su valor para similar un error en la http response
const errorHttpFake = false;

// Los campos que permiten filtros
// item: object key name de la respuesta de la peticion
// name: es el nombre que queremos mostrar en el select > option
const listItemsKeyFilter = [
  { item: "nit", name: "NIT" },
  { item: "estado", name: "Estado" },
  { item: "factura", name: "Factura" },
  { item: "numGuia", name: "Guia" },
  { item: "sucursal", name: "Nombre" },
  { item: "fechaPedido", name: "Fecha" },
  { item: "transportadora", name: "Transportador" },
  { item: "direccion", name: "Direccion" },
];

const OrdersContainer = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Filtros
  const [filtersItems, setFiltersItems] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // Aqui se realizaria la http response
    setTimeout(() => {
      if (errorHttpFake) {
        // Asi se gestionarian los errores en el catch
        return navigate("/");
      }

      setData(fakeData.resultado);
      setFiltersItems(
        Object.keys(fakeData.resultado[0])
          .filter((nameKey) => {
            return listItemsKeyFilter.map(({ item }) => item).includes(nameKey);
          })
          .map((nameKey) => {
            return listItemsKeyFilter[
              listItemsKeyFilter.map(({ item }) => item).indexOf(nameKey)
            ];
          })
      );

      setIsLoading(false);
    }, 2000);
  }, [orderId]);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  // Aplicamos filtros
  useEffect(() => {
    if (filters != null) {
      const { item, showEmptyItems, sort } = filters;

      setFilterData(() => {
        let newData = data;

        if (showEmptyItems != "all") {
          newData = newData.filter((itemData) => {
            if (itemData[item] == "" || itemData[item] == null) {
              return showEmptyItems == "empty";
            }

            return !(showEmptyItems == "empty");
          });
        }

        if (sort == "desc") {
          newData.sort((a, b) => a[item] - b[item]).reverse();
        }

        if (sort == "asc") {
          newData.sort((a, b) => a[item] - b[item]);
        }

        return newData;
      });
    }
  }, [filters]);

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && (
        <div className="flex-grow flex flex-col gap-4 md:gap-6  mx-4 md:mx-16 py-8">
          <div className="flex items-center justify-between font-medium text-lg md:text-xl">
            <p className="text-zinc-600">
              {" "}
              Pedidos de <span className="text-durespo-100">{orderId}</span>
            </p>
            {filtersItems.length > 0 && (
              <OrderFilter
                setFilters={setFilters}
                dataElements={filtersItems}
              />
            )}
          </div>
            

          {filterData.length > 0 ?
            filterData.map(
              (
                {
                  nit,
                  estado,
                  factura,
                  numGuia,
                  sucursal,
                  fechaPedido,
                  transportadora,
                  direccion,
                  pedido,
                },
                i
              ) => {
                return (
                  <OrderItem
                    key={`${pedido}${i}`}
                    orderId={pedido }
                    nit={nit}
                    status={estado}
                    bill={factura}
                    guide={numGuia}
                    name={sucursal}
                    date={fechaPedido}
                    transporter={transportadora}
                    direction={direccion}
                    delayFade={i < 8 ? (i + 1) * 100 : 0}
                  />
                );
              }
            ): <div>
                <p className="text-center text-sm text-zinc-400">No hay datos</p>
              </div>}
        </div>
      )}
    </>
  );
};

export default OrdersContainer;
