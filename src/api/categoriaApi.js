import { request } from "./client";

export function obtenerCategorias() {
  return request("/categoria", "GET");
}

export function obtenerCategoriaPorId(id) {
  return request(`/categoria/${id}`, "GET");
}

export function crearCategoria(nombreCategoria) {
  return request("/categoria", "POST", { nombre_categoria: nombreCategoria });
}

export function actualizarCategoria(id, nombreCategoria) {
  return request(`/categoria/${id}`, "PUT", { nombre_categoria: nombreCategoria });
}

export function eliminarCategoria(id) {
  return request(`/categoria/${id}`, "DELETE");
}