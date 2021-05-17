import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Prueba = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<p>{!!store.academias ? <h2>{store.academias.results[0].nombre}</h2> : <h2>Cargando...</h2>}</p>
		</div>
	);
};

export default Prueba;
