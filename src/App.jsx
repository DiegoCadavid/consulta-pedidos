import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import OrdersContainer from "./components/orders/OrdersContainer";
import Search from "./components/search/Search";
import RedirectRoute from "./components/RedirectRoute";

// Se uso un context por si la aplicacion se va escalar y se implementan mas funciones
import OrdersContext from "./components/contexts/ordersContext";

const App = () => {
  const navigate = useNavigate();

  // Aqui guardaremos el NIT o el Documento ingresado por el usuario
  const [orderDoc, setOrderDoc] = useState("");

  useEffect(() => {
    // Cuando el usuario ingrese un NIT se enviara a la nueva url
    if (orderDoc != "") {
      navigate(`/pedidos/${orderDoc}`);
    }
  }, [orderDoc]);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center pt-8">
      <Header />
      <OrdersContext.Provider value={{ orderDoc, setOrderDoc }}>
        <Routes>
          <Route path="/pedidos" element={<Search />} />
          <Route path="/pedidos/:orderId" element={<OrdersContainer />} />
          <Route path="/" element={<RedirectRoute />} />
          <Route path="/*" element={<RedirectRoute />} />
        </Routes>
      </OrdersContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
