import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex-grow flex flex-col gap-5 items-center justify-center">
      <SyncLoader color="#F17E00" size={12} speedMultiplier={0.8}/>
      <p className="text-zinc-500">Buscando pedidos</p>
    </div>
  );
};

export default Loading;
