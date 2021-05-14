export function validateInfo(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.name)) {
		errors.name = "Ingresa nombre correcto";
	}
	if (!values.last_name) {
		errors.last_name = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
		errors.last_name = "ingresa un apellido correcto";
	}
	if (!values.email) {
		errors.email = "Email es requerido";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email no valido";
	}

	if (!values.password) {
		errors.password = "Contraseña es requerida";
	} else if (values.password.length < 8) {
		errors.password = "la contraseña debe tener 8 caracteres";
	}

	if (!values.password2) {
		errors.password2 = "Contraseña es requerida";
	} else if (values.password2 !== values.password) {
		errors.password2 = "La contraseña no coincide";
	}
	return errors;
}

export function validateLogin(values) {
	let errors = {};

	if (!values.email) {
		errors.email = "Email es requerido";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email no valido";
	}

	if (!values.password) {
		errors.password = "Contraseña es requerida";
	} else if (values.password.length < 8) {
		errors.password = "la contraseña debe tener 8 caracteres";
	}

	return errors;
}

export function validateForm(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.name)) {
		errors.name = "Ingresa nombre correcto";
	}
	if (!values.last_name) {
		errors.last_name = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
		errors.last_name = "ingresa un apellido correcto";
	}
	if (!values.email) {
		errors.email = "Email es requerido";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email no valido";
	}

	if (!values.password) {
		errors.password = "Contraseña es requerida";
	} else if (values.password.length < 8) {
		errors.password = "la contraseña debe tener 8 caracteres";
	}

	if (!values.password2) {
		errors.password2 = "Contraseña es requerida";
	} else if (values.password2 !== values.password) {
		errors.password2 = "La contraseña no coincide";
	}
}
export function validateFormTrabajador(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.name)) {
		errors.name = "Ingresa nombre correcto";
	}
	if (!values.last_name) {
		errors.last_name = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
		errors.last_name = "ingresa un apellido correcto";
	}

	if (!values.email) {
		errors.email = "Email es requerido";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email no valido";
	}
	if (!values.city) {
		errors.city = "Ciudad es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.city)) {
		errors.city = "Ingrese una ciudad valida";
	}
	if (!values.address) {
		errors.address = "Direccion es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.address)) {
		errors.address = "Direccion no valida";
	}
	return errors;
}
