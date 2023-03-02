// Import Components
import Head from "../../components/Head";
import SnackTitle from "../../components/SnackTitle";
import Snacks from "../../components/Snacks";
import { useEffect, useState } from "react";
import { getPizzas } from "../../services/api";

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getPizzas();

      setPizzas(burgerRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title="Pizzas" />
      <SnackTitle children="Pizzas" />
      <Snacks snacks={pizzas} />
    </>
  );
};

export default PizzasPage;
