import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos {
    
    loadCubos() {
        return new Promise((resolve) => {
            var request = 'api/cubos';
            var url = Global.urlApi + request;
            axios.get(url).then(response => {
                console.log(response.data);
                resolve(response.data);
            })
        })

    }

    loadDetallesCubo(id) {
        return new Promise((resolve, reject) => {
            const request = `api/Cubos/${id}`;
            const url = Global.urlApi + request;
            axios.get(url)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    iniciarSesion(loginModel) {
        return new Promise((resolve, reject) => {
            const request = "api/manage/login";
            const url = Global.urlApi + request;
            axios.post(url, loginModel, {
                headers: { "Content-Type": "application/json" }
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    loadMarcas() {
        return new Promise((resolve, reject) => {
            const request = "api/cubos/marcas";
            const url = Global.urlApi + request;
            axios.get(url)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    loadCubosMarca(marca) {
        return new Promise((resolve, reject) => {
            const request = `api/Cubos/CubosMarca/${marca}`;
            const url = Global.urlApi + request;
            axios.get(url)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    loadComentarios(idCubo) {
        return new Promise((resolve, reject) => {
            const request = `api/comentarioscubo/getcomentarioscubo/${idCubo}`;
            const url = Global.urlApi + request;
            axios.get(url)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    loadInfoUser() {
        return new Promise((resolve, reject) => {
            const request = "api/manage/perfilUsuario";
            const url = Global.urlApi + request;
            const token = localStorage.getItem("token");
            axios.get(url, {
                headers: { "Authorization": `bearer ${token}` }
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    comprarCubo(id) {
        return new Promise((resolve, reject) => {
            const request = `api/Compra/InsertarPedido/${id}`;
            const url = Global.urlApi + request;
            const token = localStorage.getItem("token");
            axios.post(url, {}, {
                headers: { "Authorization": `bearer ${token}` }
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    mostrarCompras() {
        return new Promise((resolve, reject) => {
            const request = "api/Compra/ComprasUsuario/";
            const url = Global.urlApi + request;
            const token = localStorage.getItem("token");
            axios.get(url, {
                headers: { "Authorization": `bearer ${token}` }
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}