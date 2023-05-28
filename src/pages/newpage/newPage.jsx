import React from "react";
import "./newpage.scss";

const NewPage = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
  const ulRef = React.useRef();
  const numberRef = React.useRef();

  numberRef.current = numbers;

  const addnumber = () => {
    const lastNumbers = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumbers + 1]);
  };

  const handleScroll = React.useCallback(() => {
    console.log("был скрол", numberRef.current);
  }, []);

  React.useEffect(() => {
    ulRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const start = () => {
    ulRef.current.addEventListener("scroll", handleScroll);
  };

  const remove = () => {
    console.log(ulRef);
    ulRef.current.removeEventListener("scroll", handleScroll);
  };

  return (
    <div>
      <ul className="ul" ref={ulRef}>
        {numbers.map((item, index) => {
          return <li key={index}>Номер {item}</li>;
        })}
      </ul>
      <button onClick={addnumber}>Добавить номер </button>
      <button onClick={start}>Следить за скролом</button>
      <button onClick={remove}>Не следить за скроллом</button>
    </div>
  );
};

export default NewPage;
