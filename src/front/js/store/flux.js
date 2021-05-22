import Signup from "../views/signup";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			academias: null,
			areasProgramacion: null,
			lenguajes: null,
			preguntasFrecuentes: null,
			usuarioActual: {},
			posts: null,
			perfilUsuario: {}
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

			getUsuario: (field, url, userToken) => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-type": "application/json",
						Authorization: "Bearer " + JSON.parse(userToken)
					}
				})
					.then(resp => resp.json())
					.then(data => localStorage.setItem(field, JSON.stringify(data["user"])))
					.catch(error => {
						console.error(error.message);
					});
				// setStore({ [field]: localStorage.getItem(field) });
			},

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },

			postFetch: (data, url) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => localStorage.setItem("datosUsuario", JSON.stringify(data)))
					.catch(error => console.error("Error", error));
			},
			// guardar en localStorage si check recuerdame esta True

			postPost: (data, url) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => store.posts.results.append(data))
					.catch(error => console.error("Error", error));
			},
			agregarLogin: (usuarioemail, usuariopassword) => {
				const usuario = {
					email: usuarioemail,
					password: usuariopassword
				};
				setStore({ usuarioActual: usuario });
				console.log("usuario ya está loggeado");
			},

			agregarPost: post_contenido => {
				const post = {
					post_contenido: post_contenido,
					perfiles_id: 1
				};
				console.log("Estamos preparando el post para su envío");
				getActions().postPost(post, "http://0.0.0.0:3001/api/posts");
			},

			//crear metodo que chequee usuario en sessionStorage
			actualizarUsuario: () => {
				let user = localStorage.getItem("datosUsuario");
				setStore({ perfilUsuario: JSON.parse(user) });
				console.log(getStore().perfilUsuario);
			},

			registroUsuario: (nombre, apellido, correo, contraseña) => {
				const perfil = {
					nombre: nombre,
					apellido: apellido,
					email: correo,
					password: contraseña
				};
				const oldPerfil = getStore().perfilUsuario;
				Object.keys(oldPerfil).length === 0
					? setStore({ perfilUsuario: perfil })
					: console.log("Hubo un error guardando perfil");
			},

			postRegistro: (dataDeUsuario, url) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(dataDeUsuario),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.error("Error", error));
			},

			checkCredentials: (url, userToken) => {
				fetch(url, {
					method: "GET",
					headers: {
						Authorization: "Bearer " + JSON.parse(userToken),
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.error("Error", error));
			},

			/*SIGNUP*/
			signup: values => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(values);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch("", requestOptions)
					.then(response => response.json())
					.catch(error => {
						console.log("error", error);
						throw error;
					});
			},

			/* LOGIN */
			login: values => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(values);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch("", requestOptions)
					.then(response => response.json())
					.catch(error => {
						console.log("error", error);
						throw error;
					});
			},

			/* PERFIL USUARIO */
			PerfilUsuario: values => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(values);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch("", requestOptions)
					.then(response => response.json())
					.catch(error => {
						console.log("error", error);
						throw error;
					});
			}
		}
	};
};

export default getState;
