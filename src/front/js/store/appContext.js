import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";

export const Context = createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updateStore =>
					setState({
						store: Object.assign(state.store, updateStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			console.log("Cargando informacion...");
			state.actions.getFetch("academias", "http://0.0.0.0:3001/api/academias");
			state.actions.getFetch("areasProgramacion", "http://0.0.0.0:3001/api/areas_de_programacion");
			state.actions.getFetch("lenguajes", "http://0.0.0.0:3001/api/lenguajes");
			state.actions.getFetch("preguntasFrecuentes", "http://0.0.0.0:3001/api/preguntas_frecuentes");

			console.log(state.store);

			// state.actions.getMessage(); // <---- calling this function from the flux.js actions

			state.actions.signup();
			[state.actions];

			state.actions.login();
			[state.actions];
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component

		return (
			<Context.Provider value={state}>
				<PassedComponent />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
