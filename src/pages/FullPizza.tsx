import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Pizza {
  imageUrl: string;
  title: string;
  price: number;
}

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<Pizza>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63f36531fe3b595e2ee0f355.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert(`Не удалось получить пиццу`);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} P</h4>
    </div>
  );
};

export default FullPizza;
