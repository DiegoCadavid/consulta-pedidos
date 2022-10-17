import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OrderFilter = ({ dataElements = [], setFilters }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { register, handleSubmit: handleHookSubmit } = useForm();

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSubmit = (data) => {
    // emptyItems:true field: "factura" sort: "asc"
    setFilters({
      item: data.field,
      sort: data.sort,
      showEmptyItems: data.emptyFields,
    });

    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex text-zinc-50 bg-durespo-100 text-sm p-2 rounded-md  gap-1 items-center">
        {" "}
        Filtros
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {showDropdown && (
        <div className="absolute z-10 right-0 p-3 bg-zinc-100 shadow-md rounded-md text-sm animate-fade ">
          <form
            onSubmit={handleHookSubmit(handleSubmit)}
            className="text-zinc-700 flex flex-col gap-2">
            <select
              className="p-2 focus-visible:outline-none"
              {...register("field")}>
              {dataElements.map(({ item, name }) => {
                return (
                  <option key={item} value={item}>
                    {" "}
                    {name}{" "}
                  </option>
                );
              })}
            </select>
            <select
              className="p-2 focus-visible:outline-none"
              {...register("sort")}>
              <option value="desc">Descendente</option>
              <option value="asc">Ascendente</option>
            </select>

            <div className="flex flex-col text-center gap-1 ">
              <p className="text-zinc-500">Solo ver elementos: </p>
              <select
                className="p-2 focus-visible:outline-none"
                {...register("emptyFields")}>
                <option value="all">Todos</option>
                <option value="empty">Vacios</option>
                <option value="noEmpty">No vacios</option>
              </select>
            </div>

            <input
              className="bg-durespo-100 hover:bg-durespo-200 hover:cursor-pointer active:bg-durespo-200 p-2 rounded-md text-zinc-50 transition-colors ease-in"
              type="submit"
              value="Aplicar"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
