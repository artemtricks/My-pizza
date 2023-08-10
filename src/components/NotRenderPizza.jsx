import React from "react";

const NotRenderPizza = () => {
  return (
    <div className="content__error_pizza">
      <h2>
        Не удалось загрузить пиццы <span>&#128530;</span>
      </h2>
      <p>
        К сожалению не удалось загрузить пиццы из-за внутренней ошибки,
        попробуйте повторить попытку позже...
      </p>
    </div>
  );
};

export default NotRenderPizza;
