const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			academias: null,
			areasProgramacion: null,
			lenguajes: null,
			preguntasFrecuentes: null
		},
		actions: {
			// Use getActions to call a function within a fuction

			getFetch: (field, url) => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ [field]: data }))
					.catch(error => {
						console.error(error.message);
					});
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
