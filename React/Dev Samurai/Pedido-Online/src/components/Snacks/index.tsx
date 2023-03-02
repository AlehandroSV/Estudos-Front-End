// Import Styles
import { Container } from "./styles";

// Import IMG/Icons
import { FiPlus } from "react-icons/fi";
import { currencyFormat } from "../../helpers/currencyFormat";
import SkeletonSnack from "./SkeletonSnack";

interface SnacksProps {
  // id: string;
  // snack: string;
  // name: string;
  // description: string;
  // price: number;
  // image: string;
  snacks: any[];
}

const Snacks = ({ snacks }: SnacksProps) => {
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => (
            <div key={snack.id} className="snack">
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currencyFormat(snack.price)}</strong>
                <button>
                  <FiPlus size={28} />
                </button>
              </div>
            </div>
          ))}
    </Container>
  );
};

export default Snacks;
