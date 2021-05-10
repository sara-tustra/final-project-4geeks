import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <p>
        <h2>Que el unico limite de aprendizaje lo pongas tu!</h2>
      </p>
    </div>
  );
};
