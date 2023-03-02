// Import Components
import Head from "../../components/Head";
import SnackTitle from "../../components/SnackTitle";
import Snacks from "../../components/Snacks";
import { useEffect, useState } from "react";
import { getDrinks } from "../../services/api";

const DrinksPage = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    (async () => {
      const drinksRequest = await getDrinks();

      setDrinks(drinksRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title="Bebidas" />
      <SnackTitle children="Bebidas" />
      <Snacks snacks={drinks} />
    </>
  );
};

export default DrinksPage;
