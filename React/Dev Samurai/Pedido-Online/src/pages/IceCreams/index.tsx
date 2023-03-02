// Import Components
import Head from "../../components/Head";
import SnackTitle from "../../components/SnackTitle";
import Snacks from "../../components/Snacks";
import { useEffect, useState } from "react";
import { getIceCreams } from "../../services/api";

const IceCreamsPage = () => {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getIceCreams();

      setIceCreams(burgerRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title="Sorvetes" />
      <SnackTitle children="Sorvetes" />
      <Snacks snacks={iceCreams} />
    </>
  );
};

export default IceCreamsPage;
