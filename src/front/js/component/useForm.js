import { useState, useEffect } from "react";

const useForm = (callback, validate, datos, endpoint, method) => {
	const [values, setValues] = useState(datos);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const submit = info => {
		const session = localStorage.getItem("session");
		let token = "";
		if (session) {
			token = JSON.parse(session).access_token;
		}
		fetch("http://localhost:3000/" + endpoint, {
			method,
			body: info ? JSON.stringify(info) : undefined,
			headers:
				token !== ""
					? {
							"Content-Type": "application/json",
							Authorization: "bearer " + token
					  }
					: {
							"Content-Type": "application/json"
					  }
		})
			.then(async res => {
				return {
					response: res,
					json: await res.json()
				};
			})
			.then(res => {
				if (endpoint === "user/signup" || endpoint === "user/signin") {
					if (parseInt(res.response.status) === 200) {
						localStorage.setItem("session", JSON.stringify(res.json));
					}
				}
				callback(res.json.message ? res.json.message : "Listo", parseInt(res.response.status), res.json);
			})
			.catch(error => {
				console.error("Error:", error);
				callback(error.toString(), 500, error);
			});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				submit(values);
			}
		},
		[errors]
	);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
