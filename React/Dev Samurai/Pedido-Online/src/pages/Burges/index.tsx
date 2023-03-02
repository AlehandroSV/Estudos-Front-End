// Import Libs
import { useState, useEffect } from "react";

// Internal Import
import { getBurgues } from "../../services/api";

// Import Components
import Head from "../../components/Head";
import SnackTitle from "../../components/SnackTitle";
import Snacks from "../../components/Snacks";

const BurgersPage = () => {
  const [burges, setBurges] = useState([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgues();

      setBurges(burgerRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgers" />
      <SnackTitle children="Hambúrguer" />
      <Snacks snacks={burges} />
    </>
  );
};

export default BurgersPage;
