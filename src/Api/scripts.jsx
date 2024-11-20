import axios from "axios";
//POST
export const CrearPolizaMovil = async (nuevaPoliza) => {
    try {
        console.log("creando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil`;
        const payload = nuevaPoliza;
        const respuesta = await axios.post(url, payload);
        console.log("creando poliza movil finalizado");
        return respuesta.data.data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const CrearPolizaVehicular = async (nuevaPoliza) => {
    try {
        console.log("creando poliza vehicular comenzando");
        const url = `http://localhost:8080/poliza/vehicular`;
        const payload = nuevaPoliza;
        const respuesta = await axios.post(url, payload);
        console.log("creando poliza vehicular finalizado");
        return respuesta.data.data;
    } catch (error) {
        console.error("Error creando poliza vehicular:", error);
        throw error;
    }
}

export const CrearPolizaInmobiliaria = async (nuevaPoliza) => {
    try {
        console.log("creando poliza inmobiliaria comenzando");
        const url = `http://localhost:8080/poliza/inmobiliaria`;
        const payload = nuevaPoliza;
        const respuesta = await axios.post(url, payload);
        console.log("creando poliza inmobiliaria finalizado");
        return respuesta.data.data;
    } catch (error) {
        console.error("Error creando poliza inmobiliaria:", error);
        throw error;
    }
}

//GET LIST

export const ListarPolizasMovil = async () => {
    try {
        console.log("creando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil`;
        const respuesta = await axios.get(url);
        console.log("creando poliza movil finalizado");
        return respuesta.data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}
export const ListarPolizasVehiculares = async () => {
    try {
        console.log("creando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/vehicular`;
        const respuesta = await axios.get(url);
        console.log("creando poliza movil finalizado");
        return respuesta.data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}
export const ListarPolizasInmobiliarias = async () => {
    try {
        console.log("creando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/inmobiliaria`;
        const respuesta = await axios.get(url);
        console.log("creando poliza movil finalizado");
        return respuesta.data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

//GET x ID
export const BuscarPolizasMovil = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil?id=${id}`;
        const respuesta = await axios.get(url);
        const data= respuesta.data
        const found = data.find(item => item.id === parseInt(id, 10));
        console.log("buscando poliza movil finalizado");
        return found;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const BuscarPolizasVehicular = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/vehicular?id=${id}`;
        const respuesta = await axios.get(url);
        const data= respuesta.data
        const found = data.find(item => item.id === parseInt(id, 10));
        console.log("buscando poliza movil finalizado");
        return found;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const BuscarPolizasInmobiliaria = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/inmobiliaria?id=${id}`;
        const respuesta = await axios.get(url);
        const data= respuesta.data
        const found = data.find(item => item.id === parseInt(id, 10));
        console.log("buscando poliza movil finalizado");
        return found;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

//PUT x ID
export const ActualizarPolizasMovil = async (id,payload) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil/${id}`;
        const respuesta = await axios.put(url, payload);
        const data= respuesta.data
        console.log("buscando poliza movil finalizado");
        return data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const ActualizarPolizasVehicular = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil?id=${id}`;
        const respuesta = await axios.get(url);
        const data= respuesta.data
        const found = data.find(item => item.id === parseInt(id, 10));
        console.log("buscando poliza movil finalizado");
        return found;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const ActualizarPolizasInmobiliaria = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil/${id}`;
        const respuesta = await axios.get(url);
        const data= respuesta.data
        const found = data.find(item => item.id === parseInt(id, 10));
        console.log("buscando poliza movil finalizado");
        return found;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

//DELETE X ID
export const EliminarPolizasMovil = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil/${id}`;
        const respuesta = await axios.delete(url);
        const data= "Eliminado"
        console.log("buscando poliza movil finalizado");
        return data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const EliminarPolizasVehicular = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil/${id}`;
        const respuesta = await axios.delete(url);
        const data= "Eliminado"
        console.log("buscando poliza movil finalizado");
        return data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}

export const EliminarPolizasInmobiliaria = async (id) => {
    debugger
    try {
        console.log("buscando poliza movil comenzando");
        const url = `http://localhost:8080/poliza/movil/${id}`;
        const respuesta = await axios.delete(url);
        const data= "Eliminado"
        console.log("buscando poliza movil finalizado");
        return data;
    } catch (error) {
        console.error("Error creando poliza movil:", error);
        throw error;
    }
}