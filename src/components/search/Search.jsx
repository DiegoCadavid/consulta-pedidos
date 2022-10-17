import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import OrdersContext from "../contexts/ordersContext";

const Search = () => {
  const {
    register,
    handleSubmit: handleHookSubmit,
    formState: { errors },
    setFocus
  } = useForm();

  const OrderCtx = useContext(OrdersContext);

  // Al inciar hacemos que el input este en focus
  useEffect(() => {
    setFocus('doc')
  }, [setFocus]);

  const handleSubmit = (data) => {
    OrderCtx.setOrderDoc(data.doc);
  };

  return (
    <div className="flex-grow flex flex-col gap-8 items-center justify-center">
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-bold">Consulta pedidos</h3>
        <p className="font-medium text-sm md:text-base text-zinc-600">
          {" "}
          Ingrese su numero de celula o NIT sin digito de verificacion{" "}
        </p>
      </div>

      <div className=" max-w-sm text-sm md:text-base md:max-w-2xl w-full ">
        <form
          onSubmit={handleHookSubmit(handleSubmit)}
          className="max-w-sm md:max-w-2xl w-full flex  justify-center gap-2">
          <input
            {...register("doc", {
              minLength: {
                value: 4,
                message: "minimo 4 caracteres",
              },
              maxLength: {
                value: 15,
                message: "Maximo 15 caracteres",
              },
              required: {
                value: true,
                message: "Este campo es obligatorio"
              }
            })}
            className={`p-2 rounded-full px-4 w-full outline-none transition-colors ease-out ${ errors.doc ? "ring-2 ring-red-600" : "ring-1 focus:ring-durespo-100" }`}
            type="number"
            id="inputDoc"
            placeholder="Ingrese su numero de celula o NIT"
          />

          <button
            type="submit"
            className="bg-durespo-100 hover:bg-durespo-200 transition-colors ease-in p-2 pr-3 font-medium text-zinc-50 rounded-full flex gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Buscar
          </button>
        </form>
        {errors.doc && (
          <div className="text-red-500 text-sm p-1 ml-3">
            <p> {errors.doc?.message} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
